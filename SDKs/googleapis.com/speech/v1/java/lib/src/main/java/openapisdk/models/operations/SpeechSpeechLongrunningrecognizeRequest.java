package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechSpeechLongrunningrecognizeRequest {
    public SpeechSpeechLongrunningrecognizeQueryParams queryParams;
    public SpeechSpeechLongrunningrecognizeRequest withQueryParams(SpeechSpeechLongrunningrecognizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LongRunningRecognizeRequestInput request;
    public SpeechSpeechLongrunningrecognizeRequest withRequest(openapisdk.models.shared.LongRunningRecognizeRequestInput request) {
        this.request = request;
        return this;
    }
    public SpeechSpeechLongrunningrecognizeSecurity security;
    public SpeechSpeechLongrunningrecognizeRequest withSecurity(SpeechSpeechLongrunningrecognizeSecurity security) {
        this.security = security;
        return this;
    }
}