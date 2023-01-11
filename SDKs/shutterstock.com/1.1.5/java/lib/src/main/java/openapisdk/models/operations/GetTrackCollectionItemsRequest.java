package openapisdk.models.operations;



public class GetTrackCollectionItemsRequest {
    public GetTrackCollectionItemsPathParams pathParams;
    public GetTrackCollectionItemsRequest withPathParams(GetTrackCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTrackCollectionItemsQueryParams queryParams;
    public GetTrackCollectionItemsRequest withQueryParams(GetTrackCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTrackCollectionItemsSecurity security;
    public GetTrackCollectionItemsRequest withSecurity(GetTrackCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}