package openapisdk.models.operations;



public class DnsPoliciesGetRequest {
    public DnsPoliciesGetPathParams pathParams;
    public DnsPoliciesGetRequest withPathParams(DnsPoliciesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsPoliciesGetQueryParams queryParams;
    public DnsPoliciesGetRequest withQueryParams(DnsPoliciesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsPoliciesGetSecurity security;
    public DnsPoliciesGetRequest withSecurity(DnsPoliciesGetSecurity security) {
        this.security = security;
        return this;
    }
}