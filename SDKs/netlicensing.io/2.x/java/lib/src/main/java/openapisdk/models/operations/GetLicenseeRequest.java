package openapisdk.models.operations;



public class GetLicenseeRequest {
    public GetLicenseePathParams pathParams;
    public GetLicenseeRequest withPathParams(GetLicenseePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLicenseeSecurity security;
    public GetLicenseeRequest withSecurity(GetLicenseeSecurity security) {
        this.security = security;
        return this;
    }
}