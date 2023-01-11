package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiListRequest {
    public SubscriptionsApiListQueryParams queryParams;
    public SubscriptionsApiListRequest withQueryParams(SubscriptionsApiListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public SubscriptionsApiListRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}