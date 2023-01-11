package openapisdk.models.operations;



public class DfareportingMobileCarriersListResponse {
    public String contentType;
    public DfareportingMobileCarriersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MobileCarriersListResponse mobileCarriersListResponse;
    public DfareportingMobileCarriersListResponse withMobileCarriersListResponse(openapisdk.models.shared.MobileCarriersListResponse mobileCarriersListResponse) {
        this.mobileCarriersListResponse = mobileCarriersListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingMobileCarriersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}