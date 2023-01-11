package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsAccessRequest {
    public SecretmanagerProjectsSecretsVersionsAccessPathParams pathParams;
    public SecretmanagerProjectsSecretsVersionsAccessRequest withPathParams(SecretmanagerProjectsSecretsVersionsAccessPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsAccessQueryParams queryParams;
    public SecretmanagerProjectsSecretsVersionsAccessRequest withQueryParams(SecretmanagerProjectsSecretsVersionsAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsAccessSecurity security;
    public SecretmanagerProjectsSecretsVersionsAccessRequest withSecurity(SecretmanagerProjectsSecretsVersionsAccessSecurity security) {
        this.security = security;
        return this;
    }
}