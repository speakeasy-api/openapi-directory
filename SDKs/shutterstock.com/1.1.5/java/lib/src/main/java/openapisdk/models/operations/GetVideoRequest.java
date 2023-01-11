package openapisdk.models.operations;



public class GetVideoRequest {
    public GetVideoPathParams pathParams;
    public GetVideoRequest withPathParams(GetVideoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVideoQueryParams queryParams;
    public GetVideoRequest withQueryParams(GetVideoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVideoSecurity security;
    public GetVideoRequest withSecurity(GetVideoSecurity security) {
        this.security = security;
        return this;
    }
}