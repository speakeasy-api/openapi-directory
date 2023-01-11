package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdIntegrationsSlackRequest {
    public PatchTargetsTargetIdIntegrationsSlackPathParams pathParams;
    public PatchTargetsTargetIdIntegrationsSlackRequest withPathParams(PatchTargetsTargetIdIntegrationsSlackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Slack request;
    public PatchTargetsTargetIdIntegrationsSlackRequest withRequest(openapisdk.models.shared.Slack request) {
        this.request = request;
        return this;
    }
}