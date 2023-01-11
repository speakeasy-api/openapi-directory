package openapisdk.models.operations;



public class GetEventSimpleRequest {
    public GetEventSimplePathParams pathParams;
    public GetEventSimpleRequest withPathParams(GetEventSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventSimpleHeaders headers;
    public GetEventSimpleRequest withHeaders(GetEventSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventSimpleSecurity security;
    public GetEventSimpleRequest withSecurity(GetEventSimpleSecurity security) {
        this.security = security;
        return this;
    }
}