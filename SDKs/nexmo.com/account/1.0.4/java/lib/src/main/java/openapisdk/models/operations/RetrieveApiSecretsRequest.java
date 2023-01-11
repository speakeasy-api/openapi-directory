package openapisdk.models.operations;



public class RetrieveApiSecretsRequest {
    public RetrieveApiSecretsPathParams pathParams;
    public RetrieveApiSecretsRequest withPathParams(RetrieveApiSecretsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveApiSecretsSecurity security;
    public RetrieveApiSecretsRequest withSecurity(RetrieveApiSecretsSecurity security) {
        this.security = security;
        return this;
    }
}