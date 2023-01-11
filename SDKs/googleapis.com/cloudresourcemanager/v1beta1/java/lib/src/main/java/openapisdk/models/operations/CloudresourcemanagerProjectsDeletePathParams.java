package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudresourcemanagerProjectsDeletePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}