package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessId")
    public String accessId;
    public StorageProjectsHmacKeysUpdatePathParams withAccessId(String accessId) {
        this.accessId = accessId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public StorageProjectsHmacKeysUpdatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}