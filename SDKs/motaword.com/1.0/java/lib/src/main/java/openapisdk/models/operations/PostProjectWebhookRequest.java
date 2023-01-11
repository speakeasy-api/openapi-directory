package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectWebhookRequest {
    public PostProjectWebhookPathParams pathParams;
    public PostProjectWebhookRequest withPathParams(PostProjectWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostProjectWebhookRequestBody request;
    public PostProjectWebhookRequest withRequest(PostProjectWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}