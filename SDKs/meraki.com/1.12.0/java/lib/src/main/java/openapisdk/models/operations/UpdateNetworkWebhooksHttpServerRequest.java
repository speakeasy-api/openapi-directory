package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWebhooksHttpServerRequest {
    public UpdateNetworkWebhooksHttpServerPathParams pathParams;
    public UpdateNetworkWebhooksHttpServerRequest withPathParams(UpdateNetworkWebhooksHttpServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWebhooksHttpServerRequestBody request;
    public UpdateNetworkWebhooksHttpServerRequest withRequest(UpdateNetworkWebhooksHttpServerRequestBody request) {
        this.request = request;
        return this;
    }
}