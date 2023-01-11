package openapisdk.models.operations;



public class GetFeaturedImageCollectionRequest {
    public GetFeaturedImageCollectionPathParams pathParams;
    public GetFeaturedImageCollectionRequest withPathParams(GetFeaturedImageCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFeaturedImageCollectionQueryParams queryParams;
    public GetFeaturedImageCollectionRequest withQueryParams(GetFeaturedImageCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeaturedImageCollectionSecurity security;
    public GetFeaturedImageCollectionRequest withSecurity(GetFeaturedImageCollectionSecurity security) {
        this.security = security;
        return this;
    }
}