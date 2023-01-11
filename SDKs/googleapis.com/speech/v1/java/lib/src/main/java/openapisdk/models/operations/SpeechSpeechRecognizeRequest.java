package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechSpeechRecognizeRequest {
    public SpeechSpeechRecognizeQueryParams queryParams;
    public SpeechSpeechRecognizeRequest withQueryParams(SpeechSpeechRecognizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RecognizeRequestInput request;
    public SpeechSpeechRecognizeRequest withRequest(openapisdk.models.shared.RecognizeRequestInput request) {
        this.request = request;
        return this;
    }
    public SpeechSpeechRecognizeSecurity security;
    public SpeechSpeechRecognizeRequest withSecurity(SpeechSpeechRecognizeSecurity security) {
        this.security = security;
        return this;
    }
}