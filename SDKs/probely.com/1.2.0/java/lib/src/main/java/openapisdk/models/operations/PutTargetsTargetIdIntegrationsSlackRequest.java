package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdIntegrationsSlackRequest {
    public PutTargetsTargetIdIntegrationsSlackPathParams pathParams;
    public PutTargetsTargetIdIntegrationsSlackRequest withPathParams(PutTargetsTargetIdIntegrationsSlackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Slack request;
    public PutTargetsTargetIdIntegrationsSlackRequest withRequest(openapisdk.models.shared.Slack request) {
        this.request = request;
        return this;
    }
}