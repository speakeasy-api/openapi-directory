package openapisdk.models.operations;



public class RemoveAccountOrganizationRequest {
    public RemoveAccountOrganizationPathParams pathParams;
    public RemoveAccountOrganizationRequest withPathParams(RemoveAccountOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAccountOrganizationSecurity security;
    public RemoveAccountOrganizationRequest withSecurity(RemoveAccountOrganizationSecurity security) {
        this.security = security;
        return this;
    }
}