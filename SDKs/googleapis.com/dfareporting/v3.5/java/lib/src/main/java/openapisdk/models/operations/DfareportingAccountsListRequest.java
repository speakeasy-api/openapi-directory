package openapisdk.models.operations;



public class DfareportingAccountsListRequest {
    public DfareportingAccountsListPathParams pathParams;
    public DfareportingAccountsListRequest withPathParams(DfareportingAccountsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountsListQueryParams queryParams;
    public DfareportingAccountsListRequest withQueryParams(DfareportingAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAccountsListSecurity security;
    public DfareportingAccountsListRequest withSecurity(DfareportingAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}