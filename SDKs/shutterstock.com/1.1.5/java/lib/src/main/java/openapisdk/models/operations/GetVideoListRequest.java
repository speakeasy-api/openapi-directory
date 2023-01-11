package openapisdk.models.operations;



public class GetVideoListRequest {
    public GetVideoListQueryParams queryParams;
    public GetVideoListRequest withQueryParams(GetVideoListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVideoListSecurity security;
    public GetVideoListRequest withSecurity(GetVideoListSecurity security) {
        this.security = security;
        return this;
    }
}