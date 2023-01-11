package openapisdk.models.operations;



public class TexttospeechTextSynthesizeResponse {
    public String contentType;
    public TexttospeechTextSynthesizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TexttospeechTextSynthesizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SynthesizeSpeechResponse synthesizeSpeechResponse;
    public TexttospeechTextSynthesizeResponse withSynthesizeSpeechResponse(openapisdk.models.shared.SynthesizeSpeechResponse synthesizeSpeechResponse) {
        this.synthesizeSpeechResponse = synthesizeSpeechResponse;
        return this;
    }
}