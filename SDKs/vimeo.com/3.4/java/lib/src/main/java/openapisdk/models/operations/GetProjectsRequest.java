package openapisdk.models.operations;



public class GetProjectsRequest {
    public GetProjectsPathParams pathParams;
    public GetProjectsRequest withPathParams(GetProjectsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectsQueryParams queryParams;
    public GetProjectsRequest withQueryParams(GetProjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProjectsSecurity security;
    public GetProjectsRequest withSecurity(GetProjectsSecurity security) {
        this.security = security;
        return this;
    }
}