package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoCollectionItemsRequest {
    public AddVideoCollectionItemsPathParams pathParams;
    public AddVideoCollectionItemsRequest withPathParams(AddVideoCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionItemRequest request;
    public AddVideoCollectionItemsRequest withRequest(openapisdk.models.shared.CollectionItemRequest request) {
        this.request = request;
        return this;
    }
    public AddVideoCollectionItemsSecurity security;
    public AddVideoCollectionItemsRequest withSecurity(AddVideoCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}