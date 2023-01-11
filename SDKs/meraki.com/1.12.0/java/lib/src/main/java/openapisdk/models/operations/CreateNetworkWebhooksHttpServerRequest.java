package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkWebhooksHttpServerRequest {
    public CreateNetworkWebhooksHttpServerPathParams pathParams;
    public CreateNetworkWebhooksHttpServerRequest withPathParams(CreateNetworkWebhooksHttpServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkWebhooksHttpServerRequestBody request;
    public CreateNetworkWebhooksHttpServerRequest withRequest(CreateNetworkWebhooksHttpServerRequestBody request) {
        this.request = request;
        return this;
    }
}