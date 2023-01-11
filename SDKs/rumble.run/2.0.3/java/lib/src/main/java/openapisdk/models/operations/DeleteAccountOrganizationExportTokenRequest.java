package openapisdk.models.operations;



public class DeleteAccountOrganizationExportTokenRequest {
    public DeleteAccountOrganizationExportTokenPathParams pathParams;
    public DeleteAccountOrganizationExportTokenRequest withPathParams(DeleteAccountOrganizationExportTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAccountOrganizationExportTokenSecurity security;
    public DeleteAccountOrganizationExportTokenRequest withSecurity(DeleteAccountOrganizationExportTokenSecurity security) {
        this.security = security;
        return this;
    }
}