package openapisdk.models.operations;



public class OrgpolicyProjectsPoliciesListRequest {
    public OrgpolicyProjectsPoliciesListPathParams pathParams;
    public OrgpolicyProjectsPoliciesListRequest withPathParams(OrgpolicyProjectsPoliciesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgpolicyProjectsPoliciesListQueryParams queryParams;
    public OrgpolicyProjectsPoliciesListRequest withQueryParams(OrgpolicyProjectsPoliciesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OrgpolicyProjectsPoliciesListSecurity security;
    public OrgpolicyProjectsPoliciesListRequest withSecurity(OrgpolicyProjectsPoliciesListSecurity security) {
        this.security = security;
        return this;
    }
}