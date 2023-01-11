package openapisdk.models.operations;



public class ApproveVendorApplicationRequest {
    public ApproveVendorApplicationPathParams pathParams;
    public ApproveVendorApplicationRequest withPathParams(ApproveVendorApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApproveVendorApplicationSecurity security;
    public ApproveVendorApplicationRequest withSecurity(ApproveVendorApplicationSecurity security) {
        this.security = security;
        return this;
    }
}