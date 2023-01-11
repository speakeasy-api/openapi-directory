package openapisdk.models.operations;



public class GetImageListRequest {
    public GetImageListQueryParams queryParams;
    public GetImageListRequest withQueryParams(GetImageListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageListSecurity security;
    public GetImageListRequest withSecurity(GetImageListSecurity security) {
        this.security = security;
        return this;
    }
}