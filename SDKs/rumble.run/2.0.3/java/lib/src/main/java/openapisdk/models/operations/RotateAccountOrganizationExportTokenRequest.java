package openapisdk.models.operations;



public class RotateAccountOrganizationExportTokenRequest {
    public RotateAccountOrganizationExportTokenPathParams pathParams;
    public RotateAccountOrganizationExportTokenRequest withPathParams(RotateAccountOrganizationExportTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RotateAccountOrganizationExportTokenSecurity security;
    public RotateAccountOrganizationExportTokenRequest withSecurity(RotateAccountOrganizationExportTokenSecurity security) {
        this.security = security;
        return this;
    }
}