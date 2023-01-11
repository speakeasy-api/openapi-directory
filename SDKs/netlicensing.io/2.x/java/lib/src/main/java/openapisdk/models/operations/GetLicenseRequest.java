package openapisdk.models.operations;



public class GetLicenseRequest {
    public GetLicensePathParams pathParams;
    public GetLicenseRequest withPathParams(GetLicensePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLicenseSecurity security;
    public GetLicenseRequest withSecurity(GetLicenseSecurity security) {
        this.security = security;
        return this;
    }
}