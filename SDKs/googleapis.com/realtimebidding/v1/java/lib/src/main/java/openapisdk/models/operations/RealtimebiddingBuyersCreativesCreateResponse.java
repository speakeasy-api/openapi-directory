package openapisdk.models.operations;



public class RealtimebiddingBuyersCreativesCreateResponse {
    public String contentType;
    public RealtimebiddingBuyersCreativesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public RealtimebiddingBuyersCreativesCreateResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersCreativesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}