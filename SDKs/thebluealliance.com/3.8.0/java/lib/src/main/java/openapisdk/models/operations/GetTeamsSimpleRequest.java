package openapisdk.models.operations;



public class GetTeamsSimpleRequest {
    public GetTeamsSimplePathParams pathParams;
    public GetTeamsSimpleRequest withPathParams(GetTeamsSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsSimpleHeaders headers;
    public GetTeamsSimpleRequest withHeaders(GetTeamsSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamsSimpleSecurity security;
    public GetTeamsSimpleRequest withSecurity(GetTeamsSimpleSecurity security) {
        this.security = security;
        return this;
    }
}