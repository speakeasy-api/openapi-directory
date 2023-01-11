package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsServiceAccountGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public StorageProjectsServiceAccountGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}