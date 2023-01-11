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
    public openapisdk.models.shared.PricingV2VoiceVoiceCountryInstance pricingV2VoiceVoiceCountryInstance;
    public FetchVoiceCountryResponse withPricingV2VoiceVoiceCountryInstance(openapisdk.models.shared.PricingV2VoiceVoiceCountryInstance pricingV2VoiceVoiceCountryInstance) {
        this.pricingV2VoiceVoiceCountryInstance = pricingV2VoiceVoiceCountryInstance;
        return this;
    }
}