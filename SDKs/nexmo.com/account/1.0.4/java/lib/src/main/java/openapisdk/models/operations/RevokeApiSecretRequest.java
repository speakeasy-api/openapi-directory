package openapisdk.models.operations;



public class RevokeApiSecretRequest {
    public RevokeApiSecretPathParams pathParams;
    public RevokeApiSecretRequest withPathParams(RevokeApiSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RevokeApiSecretSecurity security;
    public RevokeApiSecretRequest withSecurity(RevokeApiSecretSecurity security) {
        this.security = security;
        return this;
    }
}