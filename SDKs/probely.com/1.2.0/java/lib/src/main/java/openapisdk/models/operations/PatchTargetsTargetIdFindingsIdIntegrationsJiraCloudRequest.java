package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest {
    public PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams pathParams;
    public PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest withPathParams(PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraFinding request;
    public PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest withRequest(openapisdk.models.shared.JiraFinding request) {
        this.request = request;
        return this;
    }
}