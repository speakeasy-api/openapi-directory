package openapisdk.models.operations;



public class DfareportingMobileCarriersGetResponse {
    public String contentType;
    public DfareportingMobileCarriersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MobileCarrier mobileCarrier;
    public DfareportingMobileCarriersGetResponse withMobileCarrier(openapisdk.models.shared.MobileCarrier mobileCarrier) {
        this.mobileCarrier = mobileCarrier;
        return this;
    }
    public Long statusCode;
    public DfareportingMobileCarriersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}