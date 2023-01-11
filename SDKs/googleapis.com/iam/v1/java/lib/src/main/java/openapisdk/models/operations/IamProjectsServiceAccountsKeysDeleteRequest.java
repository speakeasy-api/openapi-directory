package openapisdk.models.operations;



public class IamProjectsServiceAccountsKeysDeleteRequest {
    public IamProjectsServiceAccountsKeysDeletePathParams pathParams;
    public IamProjectsServiceAccountsKeysDeleteRequest withPathParams(IamProjectsServiceAccountsKeysDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysDeleteQueryParams queryParams;
    public IamProjectsServiceAccountsKeysDeleteRequest withQueryParams(IamProjectsServiceAccountsKeysDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamProjectsServiceAccountsKeysDeleteSecurity security;
    public IamProjectsServiceAccountsKeysDeleteRequest withSecurity(IamProjectsServiceAccountsKeysDeleteSecurity security) {
        this.security = security;
        return this;
    }
}