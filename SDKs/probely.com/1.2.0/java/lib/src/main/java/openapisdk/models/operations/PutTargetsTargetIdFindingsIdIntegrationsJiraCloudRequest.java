package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest {
    public PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams pathParams;
    public PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest withPathParams(PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraFinding request;
    public PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest withRequest(openapisdk.models.shared.JiraFinding request) {
        this.request = request;
        return this;
    }
}