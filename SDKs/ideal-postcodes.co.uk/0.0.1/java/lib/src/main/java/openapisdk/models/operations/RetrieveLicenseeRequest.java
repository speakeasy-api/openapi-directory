package openapisdk.models.operations;



public class RetrieveLicenseeRequest {
    public RetrieveLicenseePathParams pathParams;
    public RetrieveLicenseeRequest withPathParams(RetrieveLicenseePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RetrieveLicenseeSecurity security;
    public RetrieveLicenseeRequest withSecurity(RetrieveLicenseeSecurity security) {
        this.security = security;
        return this;
    }
}