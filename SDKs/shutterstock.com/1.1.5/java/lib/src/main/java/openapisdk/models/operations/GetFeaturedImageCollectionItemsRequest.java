package openapisdk.models.operations;



public class GetFeaturedImageCollectionItemsRequest {
    public GetFeaturedImageCollectionItemsPathParams pathParams;
    public GetFeaturedImageCollectionItemsRequest withPathParams(GetFeaturedImageCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFeaturedImageCollectionItemsQueryParams queryParams;
    public GetFeaturedImageCollectionItemsRequest withQueryParams(GetFeaturedImageCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeaturedImageCollectionItemsSecurity security;
    public GetFeaturedImageCollectionItemsRequest withSecurity(GetFeaturedImageCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}