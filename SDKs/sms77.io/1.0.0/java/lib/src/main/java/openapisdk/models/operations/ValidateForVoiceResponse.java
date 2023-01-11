package openapisdk.models.operations;



public class ValidateForVoiceResponse {
    public String contentType;
    public ValidateForVoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateForVoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ValidateForVoice200ApplicationJson validateForVoice200ApplicationJSONObject;
    public ValidateForVoiceResponse withValidateForVoice200ApplicationJsonObject(ValidateForVoice200ApplicationJson validateForVoice200ApplicationJSONObject) {
        this.validateForVoice200ApplicationJSONObject = validateForVoice200ApplicationJSONObject;
        return this;
    }
}