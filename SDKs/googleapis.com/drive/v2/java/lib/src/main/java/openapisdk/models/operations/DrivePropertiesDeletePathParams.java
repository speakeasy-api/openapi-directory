package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePropertiesDeletePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=propertyKey")
    public String propertyKey;
    public DrivePropertiesDeletePathParams withPropertyKey(String propertyKey) {
        this.propertyKey = propertyKey;
        return this;
    }
}