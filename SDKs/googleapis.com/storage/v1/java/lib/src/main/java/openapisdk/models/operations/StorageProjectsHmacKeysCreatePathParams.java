package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public StorageProjectsHmacKeysCreatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}