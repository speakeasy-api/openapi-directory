package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdWebhooksRequest {
    public PostTargetsTargetIdWebhooksPathParams pathParams;
    public PostTargetsTargetIdWebhooksRequest withPathParams(PostTargetsTargetIdWebhooksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookInput request;
    public PostTargetsTargetIdWebhooksRequest withRequest(openapisdk.models.shared.WebhookInput request) {
        this.request = request;
        return this;
    }
}