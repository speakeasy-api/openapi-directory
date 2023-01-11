package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsGetRequest {
    public SecretmanagerProjectsSecretsVersionsGetPathParams pathParams;
    public SecretmanagerProjectsSecretsVersionsGetRequest withPathParams(SecretmanagerProjectsSecretsVersionsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsGetQueryParams queryParams;
    public SecretmanagerProjectsSecretsVersionsGetRequest withQueryParams(SecretmanagerProjectsSecretsVersionsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsGetSecurity security;
    public SecretmanagerProjectsSecretsVersionsGetRequest withSecurity(SecretmanagerProjectsSecretsVersionsGetSecurity security) {
        this.security = security;
        return this;
    }
}