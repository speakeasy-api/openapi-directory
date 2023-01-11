package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdWebhooksIdRequest {
    public PatchTargetsTargetIdWebhooksIdPathParams pathParams;
    public PatchTargetsTargetIdWebhooksIdRequest withPathParams(PatchTargetsTargetIdWebhooksIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookInput request;
    public PatchTargetsTargetIdWebhooksIdRequest withRequest(openapisdk.models.shared.WebhookInput request) {
        this.request = request;
        return this;
    }
}