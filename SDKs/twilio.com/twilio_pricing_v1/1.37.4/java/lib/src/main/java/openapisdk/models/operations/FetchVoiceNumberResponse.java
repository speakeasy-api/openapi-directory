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
    public openapisdk.models.shared.PricingV1VoiceVoiceNumber pricingV1VoiceVoiceNumber;
    public FetchVoiceNumberResponse withPricingV1VoiceVoiceNumber(openapisdk.models.shared.PricingV1VoiceVoiceNumber pricingV1VoiceVoiceNumber) {
        this.pricingV1VoiceVoiceNumber = pricingV1VoiceVoiceNumber;
        return this;
    }
}