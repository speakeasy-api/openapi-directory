package openapisdk.models.operations;



public class DfareportingAdvertiserInvoicesListResponse {
    public openapisdk.models.shared.AdvertiserInvoicesListResponse advertiserInvoicesListResponse;
    public DfareportingAdvertiserInvoicesListResponse withAdvertiserInvoicesListResponse(openapisdk.models.shared.AdvertiserInvoicesListResponse advertiserInvoicesListResponse) {
        this.advertiserInvoicesListResponse = advertiserInvoicesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAdvertiserInvoicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertiserInvoicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}