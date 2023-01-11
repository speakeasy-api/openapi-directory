package openapisdk.models.operations;



public class DfareportingAccountsGetRequest {
    public DfareportingAccountsGetPathParams pathParams;
    public DfareportingAccountsGetRequest withPathParams(DfareportingAccountsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingAccountsGetQueryParams queryParams;
    public DfareportingAccountsGetRequest withQueryParams(DfareportingAccountsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingAccountsGetSecurity security;
    public DfareportingAccountsGetRequest withSecurity(DfareportingAccountsGetSecurity security) {
        this.security = security;
        return this;
    }
}