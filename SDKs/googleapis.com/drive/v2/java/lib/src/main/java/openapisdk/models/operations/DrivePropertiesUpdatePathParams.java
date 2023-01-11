package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePropertiesUpdatePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=propertyKey")
    public String propertyKey;
    public DrivePropertiesUpdatePathParams withPropertyKey(String propertyKey) {
        this.propertyKey = propertyKey;
        return this;
    }
}