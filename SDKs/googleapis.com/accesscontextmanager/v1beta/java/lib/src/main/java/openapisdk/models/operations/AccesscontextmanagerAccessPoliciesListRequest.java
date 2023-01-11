package openapisdk.models.operations;



public class AccesscontextmanagerAccessPoliciesListRequest {
    public AccesscontextmanagerAccessPoliciesListQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesListRequest withQueryParams(AccesscontextmanagerAccessPoliciesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesListSecurity security;
    public AccesscontextmanagerAccessPoliciesListRequest withSecurity(AccesscontextmanagerAccessPoliciesListSecurity security) {
        this.security = security;
        return this;
    }
}