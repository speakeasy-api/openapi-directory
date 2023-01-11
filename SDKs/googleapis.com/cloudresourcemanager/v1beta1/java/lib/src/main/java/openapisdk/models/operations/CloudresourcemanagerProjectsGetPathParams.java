package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudresourcemanagerProjectsGetPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}