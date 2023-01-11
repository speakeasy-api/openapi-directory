package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public StorageProjectsHmacKeysListPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}