package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsUndeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CloudresourcemanagerProjectsUndeletePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}