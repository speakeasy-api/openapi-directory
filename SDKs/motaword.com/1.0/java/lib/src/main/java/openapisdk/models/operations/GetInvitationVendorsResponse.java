package openapisdk.models.operations;



public class GetInvitationVendorsResponse {
    public String contentType;
    public GetInvitationVendorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetInvitationVendorsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetInvitationVendorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VendorInvitationList vendorInvitationList;
    public GetInvitationVendorsResponse withVendorInvitationList(openapisdk.models.shared.VendorInvitationList vendorInvitationList) {
        this.vendorInvitationList = vendorInvitationList;
        return this;
    }
}