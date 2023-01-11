package openapisdk.models.operations;



public class IamProjectsServiceAccountsKeysListRequest {
    public IamProjectsServiceAccountsKeysListPathParams pathParams;
    public IamProjectsServiceAccountsKeysListRequest withPathParams(IamProjectsServiceAccountsKeysListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysListQueryParams queryParams;
    public IamProjectsServiceAccountsKeysListRequest withQueryParams(IamProjectsServiceAccountsKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysListSecurity security;
    public IamProjectsServiceAccountsKeysListRequest withSecurity(IamProjectsServiceAccountsKeysListSecurity security) {
        this.security = security;
        return this;
    }
}