package openapisdk.models.operations;



public class GetFeaturedVideoCollectionRequest {
    public GetFeaturedVideoCollectionPathParams pathParams;
    public GetFeaturedVideoCollectionRequest withPathParams(GetFeaturedVideoCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFeaturedVideoCollectionQueryParams queryParams;
    public GetFeaturedVideoCollectionRequest withQueryParams(GetFeaturedVideoCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeaturedVideoCollectionSecurity security;
    public GetFeaturedVideoCollectionRequest withSecurity(GetFeaturedVideoCollectionSecurity security) {
        this.security = security;
        return this;
    }
}