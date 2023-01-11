package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_type_id")
    public String issueTypeId;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams withIssueTypeId(String issueTypeId) {
        this.issueTypeId = issueTypeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public GetIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatusPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}