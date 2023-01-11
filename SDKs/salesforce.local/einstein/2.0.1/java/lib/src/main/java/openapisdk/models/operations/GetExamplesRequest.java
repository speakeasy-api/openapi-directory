package openapisdk.models.operations;



public class GetExamplesRequest {
    public GetExamplesPathParams pathParams;
    public GetExamplesRequest withPathParams(GetExamplesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetExamplesQueryParams queryParams;
    public GetExamplesRequest withQueryParams(GetExamplesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetExamplesSecurity security;
    public GetExamplesRequest withSecurity(GetExamplesSecurity security) {
        this.security = security;
        return this;
    }
}