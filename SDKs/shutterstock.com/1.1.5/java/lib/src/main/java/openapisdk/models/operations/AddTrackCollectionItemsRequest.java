package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTrackCollectionItemsRequest {
    public AddTrackCollectionItemsPathParams pathParams;
    public AddTrackCollectionItemsRequest withPathParams(AddTrackCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionItemRequest request;
    public AddTrackCollectionItemsRequest withRequest(openapisdk.models.shared.CollectionItemRequest request) {
        this.request = request;
        return this;
    }
    public AddTrackCollectionItemsSecurity security;
    public AddTrackCollectionItemsRequest withSecurity(AddTrackCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}