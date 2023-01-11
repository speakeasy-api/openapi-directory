package openapisdk.models.operations;



public class DnsPoliciesListRequest {
    public DnsPoliciesListPathParams pathParams;
    public DnsPoliciesListRequest withPathParams(DnsPoliciesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsPoliciesListQueryParams queryParams;
    public DnsPoliciesListRequest withQueryParams(DnsPoliciesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsPoliciesListSecurity security;
    public DnsPoliciesListRequest withSecurity(DnsPoliciesListSecurity security) {
        this.security = security;
        return this;
    }
}