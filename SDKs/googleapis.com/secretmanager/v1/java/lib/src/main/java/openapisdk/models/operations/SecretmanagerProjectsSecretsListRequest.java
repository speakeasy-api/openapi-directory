package openapisdk.models.operations;



public class SecretmanagerProjectsSecretsListRequest {
    public SecretmanagerProjectsSecretsListPathParams pathParams;
    public SecretmanagerProjectsSecretsListRequest withPathParams(SecretmanagerProjectsSecretsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsSecretsListQueryParams queryParams;
    public SecretmanagerProjectsSecretsListRequest withQueryParams(SecretmanagerProjectsSecretsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecretmanagerProjectsSecretsListSecurity security;
    public SecretmanagerProjectsSecretsListRequest withSecurity(SecretmanagerProjectsSecretsListSecurity security) {
        this.security = security;
        return this;
    }
}