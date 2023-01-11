package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessId")
    public String accessId;
    public StorageProjectsHmacKeysGetPathParams withAccessId(String accessId) {
        this.accessId = accessId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public StorageProjectsHmacKeysGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}