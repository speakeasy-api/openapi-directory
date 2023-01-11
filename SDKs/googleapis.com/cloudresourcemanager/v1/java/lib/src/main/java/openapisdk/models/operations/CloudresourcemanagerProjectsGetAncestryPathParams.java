package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsGetAncestryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudresourcemanagerProjectsGetAncestryPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}