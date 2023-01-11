package openapisdk.models.operations;



public class FetchTrunkingCountryResponse {
    public String contentType;
    public FetchTrunkingCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrunkingCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PricingV2TrunkingCountryInstance pricingV2TrunkingCountryInstance;
    public FetchTrunkingCountryResponse withPricingV2TrunkingCountryInstance(openapisdk.models.shared.PricingV2TrunkingCountryInstance pricingV2TrunkingCountryInstance) {
        this.pricingV2TrunkingCountryInstance = pricingV2TrunkingCountryInstance;
        return this;
    }
}