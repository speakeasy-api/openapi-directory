package openapisdk.models.operations;



public class RealtimebiddingBuyersCreativesPatchResponse {
    public String contentType;
    public RealtimebiddingBuyersCreativesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public RealtimebiddingBuyersCreativesPatchResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersCreativesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}