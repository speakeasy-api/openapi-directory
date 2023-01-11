package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}