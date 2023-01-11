package openapisdk.models.operations;



public class FetchVoiceNumberResponse {
    public String contentType;
    public FetchVoiceNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVoiceNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PricingV2VoiceVoiceNumber pricingV2VoiceVoiceNumber;
    public FetchVoiceNumberResponse withPricingV2VoiceVoiceNumber(openapisdk.models.shared.PricingV2VoiceVoiceNumber pricingV2VoiceVoiceNumber) {
        this.pricingV2VoiceVoiceNumber = pricingV2VoiceVoiceNumber;
        return this;
    }
}