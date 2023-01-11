package openapisdk.models.operations;



public class VoiceResponse {
    public String contentType;
    public VoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String voice200TextPlainString;
    public VoiceResponse withVoice200TextPlainString(String voice200TextPlainString) {
        this.voice200TextPlainString = voice200TextPlainString;
        return this;
    }
}