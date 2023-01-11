package openapisdk.models.operations;



public class GetEventMatchesSimpleRequest {
    public GetEventMatchesSimplePathParams pathParams;
    public GetEventMatchesSimpleRequest withPathParams(GetEventMatchesSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventMatchesSimpleHeaders headers;
    public GetEventMatchesSimpleRequest withHeaders(GetEventMatchesSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventMatchesSimpleSecurity security;
    public GetEventMatchesSimpleRequest withSecurity(GetEventMatchesSimpleSecurity security) {
        this.security = security;
        return this;
    }
}