package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudresourcemanagerProjectsUpdatePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}