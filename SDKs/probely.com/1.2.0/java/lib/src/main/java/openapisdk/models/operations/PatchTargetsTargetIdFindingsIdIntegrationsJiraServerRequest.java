package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest {
    public PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams pathParams;
    public PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest withPathParams(PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraFinding request;
    public PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest withRequest(openapisdk.models.shared.JiraFinding request) {
        this.request = request;
        return this;
    }
}