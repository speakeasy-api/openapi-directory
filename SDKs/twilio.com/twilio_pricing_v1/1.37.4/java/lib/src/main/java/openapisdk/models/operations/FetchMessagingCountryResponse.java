package openapisdk.models.operations;



public class FetchMessagingCountryResponse {
    public String contentType;
    public FetchMessagingCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMessagingCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PricingV1MessagingMessagingCountryInstance pricingV1MessagingMessagingCountryInstance;
    public FetchMessagingCountryResponse withPricingV1MessagingMessagingCountryInstance(openapisdk.models.shared.PricingV1MessagingMessagingCountryInstance pricingV1MessagingMessagingCountryInstance) {
        this.pricingV1MessagingMessagingCountryInstance = pricingV1MessagingMessagingCountryInstance;
        return this;
    }
}