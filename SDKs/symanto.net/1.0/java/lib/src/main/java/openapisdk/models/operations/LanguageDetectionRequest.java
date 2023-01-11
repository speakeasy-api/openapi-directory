package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDetectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LanguageDetection[] request;
    public LanguageDetectionRequest withRequest(openapisdk.models.shared.LanguageDetection[] request) {
        this.request = request;
        return this;
    }
}