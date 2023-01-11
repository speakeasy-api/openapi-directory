package openapisdk.models.operations;



public class FetchVoiceCountryResponse {
    public String contentType;
    public FetchVoiceCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVoiceCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PricingV1VoiceVoiceCountryInstance pricingV1VoiceVoiceCountryInstance;
    public FetchVoiceCountryResponse withPricingV1VoiceVoiceCountryInstance(openapisdk.models.shared.PricingV1VoiceVoiceCountryInstance pricingV1VoiceVoiceCountryInstance) {
        this.pricingV1VoiceVoiceCountryInstance = pricingV1VoiceVoiceCountryInstance;
        return this;
    }
}