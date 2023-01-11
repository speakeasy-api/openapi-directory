package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntegrationsJiraCloudProjectsProjectIdIssueTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public GetIntegrationsJiraCloudProjectsProjectIdIssueTypesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}