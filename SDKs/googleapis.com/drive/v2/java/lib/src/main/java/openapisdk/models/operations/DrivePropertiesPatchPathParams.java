package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePropertiesPatchPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=propertyKey")
    public String propertyKey;
    public DrivePropertiesPatchPathParams withPropertyKey(String propertyKey) {
        this.propertyKey = propertyKey;
        return this;
    }
}