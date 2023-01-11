package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdIntegrationsJiraServerRequest {
    public PatchTargetsTargetIdIntegrationsJiraServerPathParams pathParams;
    public PatchTargetsTargetIdIntegrationsJiraServerRequest withPathParams(PatchTargetsTargetIdIntegrationsJiraServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraScope request;
    public PatchTargetsTargetIdIntegrationsJiraServerRequest withRequest(openapisdk.models.shared.JiraScope request) {
        this.request = request;
        return this;
    }
}