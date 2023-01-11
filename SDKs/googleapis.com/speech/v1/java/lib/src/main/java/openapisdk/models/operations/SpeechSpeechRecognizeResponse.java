package openapisdk.models.operations;



public class SpeechSpeechRecognizeResponse {
    public String contentType;
    public SpeechSpeechRecognizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RecognizeResponse recognizeResponse;
    public SpeechSpeechRecognizeResponse withRecognizeResponse(openapisdk.models.shared.RecognizeResponse recognizeResponse) {
        this.recognizeResponse = recognizeResponse;
        return this;
    }
    public Long statusCode;
    public SpeechSpeechRecognizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}