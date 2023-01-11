package openapisdk.models.operations;



public class GetAccessTokenRequest {
    public GetAccessTokenSecurity security;
    public GetAccessTokenRequest withSecurity(GetAccessTokenSecurity security) {
        this.security = security;
        return this;
    }
}