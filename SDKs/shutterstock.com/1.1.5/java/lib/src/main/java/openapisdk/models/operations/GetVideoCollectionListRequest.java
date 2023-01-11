package openapisdk.models.operations;



public class GetVideoCollectionListRequest {
    public GetVideoCollectionListQueryParams queryParams;
    public GetVideoCollectionListRequest withQueryParams(GetVideoCollectionListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVideoCollectionListSecurity security;
    public GetVideoCollectionListRequest withSecurity(GetVideoCollectionListSecurity security) {
        this.security = security;
        return this;
    }
}