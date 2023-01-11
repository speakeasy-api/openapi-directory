package openapisdk.models.operations;



public class OsconfigProjectsGuestPoliciesListRequest {
    public OsconfigProjectsGuestPoliciesListPathParams pathParams;
    public OsconfigProjectsGuestPoliciesListRequest withPathParams(OsconfigProjectsGuestPoliciesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsGuestPoliciesListQueryParams queryParams;
    public OsconfigProjectsGuestPoliciesListRequest withQueryParams(OsconfigProjectsGuestPoliciesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OsconfigProjectsGuestPoliciesListSecurity security;
    public OsconfigProjectsGuestPoliciesListRequest withSecurity(OsconfigProjectsGuestPoliciesListSecurity security) {
        this.security = security;
        return this;
    }
}