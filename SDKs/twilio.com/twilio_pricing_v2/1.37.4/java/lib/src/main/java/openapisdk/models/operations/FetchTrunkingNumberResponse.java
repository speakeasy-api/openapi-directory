package openapisdk.models.operations;



public class FetchTrunkingNumberResponse {
    public String contentType;
    public FetchTrunkingNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrunkingNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PricingV2TrunkingNumber pricingV2TrunkingNumber;
    public FetchTrunkingNumberResponse withPricingV2TrunkingNumber(openapisdk.models.shared.PricingV2TrunkingNumber pricingV2TrunkingNumber) {
        this.pricingV2TrunkingNumber = pricingV2TrunkingNumber;
        return this;
    }
}