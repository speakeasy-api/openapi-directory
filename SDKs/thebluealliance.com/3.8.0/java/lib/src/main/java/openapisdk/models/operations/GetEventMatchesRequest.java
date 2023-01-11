package openapisdk.models.operations;



public class GetEventMatchesRequest {
    public GetEventMatchesPathParams pathParams;
    public GetEventMatchesRequest withPathParams(GetEventMatchesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventMatchesHeaders headers;
    public GetEventMatchesRequest withHeaders(GetEventMatchesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventMatchesSecurity security;
    public GetEventMatchesRequest withSecurity(GetEventMatchesSecurity security) {
        this.security = security;
        return this;
    }
}