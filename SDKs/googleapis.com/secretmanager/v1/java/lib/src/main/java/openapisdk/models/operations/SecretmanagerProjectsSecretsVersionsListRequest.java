package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsVersionsListRequest {
    public SecretmanagerProjectsSecretsVersionsListPathParams pathParams;
    public SecretmanagerProjectsSecretsVersionsListRequest withPathParams(SecretmanagerProjectsSecretsVersionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsListQueryParams queryParams;
    public SecretmanagerProjectsSecretsVersionsListRequest withQueryParams(SecretmanagerProjectsSecretsVersionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecretmanagerProjectsSecretsVersionsListSecurity security;
    public SecretmanagerProjectsSecretsVersionsListRequest withSecurity(SecretmanagerProjectsSecretsVersionsListSecurity security) {
        this.security = security;
        return this;
    }
}