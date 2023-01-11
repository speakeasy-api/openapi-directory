package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdIntegrationsJiraCloudRequest {
    public PatchTargetsTargetIdIntegrationsJiraCloudPathParams pathParams;
    public PatchTargetsTargetIdIntegrationsJiraCloudRequest withPathParams(PatchTargetsTargetIdIntegrationsJiraCloudPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JiraScope request;
    public PatchTargetsTargetIdIntegrationsJiraCloudRequest withRequest(openapisdk.models.shared.JiraScope request) {
        this.request = request;
        return this;
    }
}