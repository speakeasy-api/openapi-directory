package openapisdk.models.operations;



public class DeleteLicenseRequest {
    public DeleteLicensePathParams pathParams;
    public DeleteLicenseRequest withPathParams(DeleteLicensePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteLicenseSecurity security;
    public DeleteLicenseRequest withSecurity(DeleteLicenseSecurity security) {
        this.security = security;
        return this;
    }
}