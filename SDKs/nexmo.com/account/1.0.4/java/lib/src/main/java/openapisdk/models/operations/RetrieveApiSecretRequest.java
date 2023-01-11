package openapisdk.models.operations;



public class RetrieveApiSecretRequest {
    public RetrieveApiSecretPathParams pathParams;
    public RetrieveApiSecretRequest withPathParams(RetrieveApiSecretPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveApiSecretSecurity security;
    public RetrieveApiSecretRequest withSecurity(RetrieveApiSecretSecurity security) {
        this.security = security;
        return this;
    }
}