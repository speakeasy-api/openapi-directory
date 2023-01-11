package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksSubscribeRequest {
    public WebhooksSubscribePathParams pathParams;
    public WebhooksSubscribeRequest withPathParams(WebhooksSubscribePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebhooksSubscribeRequestBody request;
    public WebhooksSubscribeRequest withRequest(WebhooksSubscribeRequestBody request) {
        this.request = request;
        return this;
    }
    public WebhooksSubscribeSecurity security;
    public WebhooksSubscribeRequest withSecurity(WebhooksSubscribeSecurity security) {
        this.security = security;
        return this;
    }
}