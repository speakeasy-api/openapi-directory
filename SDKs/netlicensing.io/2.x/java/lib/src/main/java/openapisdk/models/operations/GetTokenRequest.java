package openapisdk.models.operations;



public class GetTokenRequest {
    public GetTokenPathParams pathParams;
    public GetTokenRequest withPathParams(GetTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTokenSecurity security;
    public GetTokenRequest withSecurity(GetTokenSecurity security) {
        this.security = security;
        return this;
    }
}