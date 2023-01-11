package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest {
    public PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams pathParams;
    public PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest withPathParams(PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraFinding request;
    public PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest withRequest(openapisdk.models.shared.JiraFinding request) {
        this.request = request;
        return this;
    }
}