package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchWebhooksIdRequest {
    public PatchWebhooksIdPathParams pathParams;
    public PatchWebhooksIdRequest withPathParams(PatchWebhooksIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookInput request;
    public PatchWebhooksIdRequest withRequest(openapisdk.models.shared.WebhookInput request) {
        this.request = request;
        return this;
    }
}