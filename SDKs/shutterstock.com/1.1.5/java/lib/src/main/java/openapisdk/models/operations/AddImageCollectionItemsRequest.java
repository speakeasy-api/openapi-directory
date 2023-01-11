package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddImageCollectionItemsRequest {
    public AddImageCollectionItemsPathParams pathParams;
    public AddImageCollectionItemsRequest withPathParams(AddImageCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionItemRequest request;
    public AddImageCollectionItemsRequest withRequest(openapisdk.models.shared.CollectionItemRequest request) {
        this.request = request;
        return this;
    }
    public AddImageCollectionItemsSecurity security;
    public AddImageCollectionItemsRequest withSecurity(AddImageCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}