package openapisdk.models.operations;



public class GetProjectVideosRequest {
    public GetProjectVideosPathParams pathParams;
    public GetProjectVideosRequest withPathParams(GetProjectVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectVideosQueryParams queryParams;
    public GetProjectVideosRequest withQueryParams(GetProjectVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProjectVideosSecurity security;
    public GetProjectVideosRequest withSecurity(GetProjectVideosSecurity security) {
        this.security = security;
        return this;
    }
}