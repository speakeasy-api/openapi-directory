package openapisdk.models.operations;



public class IamProjectsServiceAccountsListRequest {
    public IamProjectsServiceAccountsListPathParams pathParams;
    public IamProjectsServiceAccountsListRequest withPathParams(IamProjectsServiceAccountsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsServiceAccountsListQueryParams queryParams;
    public IamProjectsServiceAccountsListRequest withQueryParams(IamProjectsServiceAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamProjectsServiceAccountsListSecurity security;
    public IamProjectsServiceAccountsListRequest withSecurity(IamProjectsServiceAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}