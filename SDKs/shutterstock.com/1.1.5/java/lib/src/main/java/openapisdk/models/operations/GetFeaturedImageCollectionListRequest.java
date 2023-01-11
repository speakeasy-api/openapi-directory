package openapisdk.models.operations;



public class GetFeaturedImageCollectionListRequest {
    public GetFeaturedImageCollectionListQueryParams queryParams;
    public GetFeaturedImageCollectionListRequest withQueryParams(GetFeaturedImageCollectionListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFeaturedImageCollectionListSecurity security;
    public GetFeaturedImageCollectionListRequest withSecurity(GetFeaturedImageCollectionListSecurity security) {
        this.security = security;
        return this;
    }
}