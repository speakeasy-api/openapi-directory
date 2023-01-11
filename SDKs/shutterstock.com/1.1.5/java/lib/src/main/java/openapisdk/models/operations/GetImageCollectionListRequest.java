package openapisdk.models.operations;



public class GetImageCollectionListRequest {
    public GetImageCollectionListQueryParams queryParams;
    public GetImageCollectionListRequest withQueryParams(GetImageCollectionListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageCollectionListSecurity security;
    public GetImageCollectionListRequest withSecurity(GetImageCollectionListSecurity security) {
        this.security = security;
        return this;
    }
}