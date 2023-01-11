package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateWebhookRequest {
    public ReposCreateWebhookPathParams pathParams;
    public ReposCreateWebhookRequest withPathParams(ReposCreateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateWebhookRequestBody request;
    public ReposCreateWebhookRequest withRequest(ReposCreateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}