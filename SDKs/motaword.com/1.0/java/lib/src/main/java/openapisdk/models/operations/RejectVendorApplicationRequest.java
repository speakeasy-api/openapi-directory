package openapisdk.models.operations;



public class RejectVendorApplicationRequest {
    public RejectVendorApplicationPathParams pathParams;
    public RejectVendorApplicationRequest withPathParams(RejectVendorApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RejectVendorApplicationSecurity security;
    public RejectVendorApplicationRequest withSecurity(RejectVendorApplicationSecurity security) {
        this.security = security;
        return this;
    }
}