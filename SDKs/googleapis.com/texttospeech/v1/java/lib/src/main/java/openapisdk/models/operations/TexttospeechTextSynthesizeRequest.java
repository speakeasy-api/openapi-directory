package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TexttospeechTextSynthesizeRequest {
    public TexttospeechTextSynthesizeQueryParams queryParams;
    public TexttospeechTextSynthesizeRequest withQueryParams(TexttospeechTextSynthesizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SynthesizeSpeechRequest request;
    public TexttospeechTextSynthesizeRequest withRequest(openapisdk.models.shared.SynthesizeSpeechRequest request) {
        this.request = request;
        return this;
    }
    public TexttospeechTextSynthesizeSecurity security;
    public TexttospeechTextSynthesizeRequest withSecurity(TexttospeechTextSynthesizeSecurity security) {
        this.security = security;
        return this;
    }
}