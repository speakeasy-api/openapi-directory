package openapisdk.models.operations;



public class GetFeaturedVideoCollectionListRequest {
    public GetFeaturedVideoCollectionListQueryParams queryParams;
    public GetFeaturedVideoCollectionListRequest withQueryParams(GetFeaturedVideoCollectionListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeaturedVideoCollectionListSecurity security;
    public GetFeaturedVideoCollectionListRequest withSecurity(GetFeaturedVideoCollectionListSecurity security) {
        this.security = security;
        return this;
    }
}