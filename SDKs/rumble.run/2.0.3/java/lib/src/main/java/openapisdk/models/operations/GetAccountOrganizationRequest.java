package openapisdk.models.operations;



public class GetAccountOrganizationRequest {
    public GetAccountOrganizationPathParams pathParams;
    public GetAccountOrganizationRequest withPathParams(GetAccountOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccountOrganizationSecurity security;
    public GetAccountOrganizationRequest withSecurity(GetAccountOrganizationSecurity security) {
        this.security = security;
        return this;
    }
}