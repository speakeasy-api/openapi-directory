package openapisdk.models.operations;



public class MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse {
    public String contentType;
    public MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoiceOfMerchantState voiceOfMerchantState;
    public MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse withVoiceOfMerchantState(openapisdk.models.shared.VoiceOfMerchantState voiceOfMerchantState) {
        this.voiceOfMerchantState = voiceOfMerchantState;
        return this;
    }
}