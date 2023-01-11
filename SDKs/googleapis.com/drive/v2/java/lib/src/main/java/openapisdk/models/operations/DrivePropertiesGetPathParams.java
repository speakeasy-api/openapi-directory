package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePropertiesGetPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=propertyKey")
    public String propertyKey;
    public DrivePropertiesGetPathParams withPropertyKey(String propertyKey) {
        this.propertyKey = propertyKey;
        return this;
    }
}