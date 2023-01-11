package openapisdk.models.operations;



public class DeleteLicenseeRequest {
    public DeleteLicenseePathParams pathParams;
    public DeleteLicenseeRequest withPathParams(DeleteLicenseePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteLicenseeSecurity security;
    public DeleteLicenseeRequest withSecurity(DeleteLicenseeSecurity security) {
        this.security = security;
        return this;
    }
}