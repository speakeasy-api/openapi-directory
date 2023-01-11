package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkWebhooksWebhookTestRequest {
    public CreateNetworkWebhooksWebhookTestPathParams pathParams;
    public CreateNetworkWebhooksWebhookTestRequest withPathParams(CreateNetworkWebhooksWebhookTestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkWebhooksWebhookTestRequestBody request;
    public CreateNetworkWebhooksWebhookTestRequest withRequest(CreateNetworkWebhooksWebhookTestRequestBody request) {
        this.request = request;
        return this;
    }
}