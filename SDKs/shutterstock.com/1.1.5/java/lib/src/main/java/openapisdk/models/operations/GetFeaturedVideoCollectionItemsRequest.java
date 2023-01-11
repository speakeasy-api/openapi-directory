package openapisdk.models.operations;



public class GetFeaturedVideoCollectionItemsRequest {
    public GetFeaturedVideoCollectionItemsPathParams pathParams;
    public GetFeaturedVideoCollectionItemsRequest withPathParams(GetFeaturedVideoCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFeaturedVideoCollectionItemsQueryParams queryParams;
    public GetFeaturedVideoCollectionItemsRequest withQueryParams(GetFeaturedVideoCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeaturedVideoCollectionItemsSecurity security;
    public GetFeaturedVideoCollectionItemsRequest withSecurity(GetFeaturedVideoCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}