package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTranslationMemoryUnitRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TranslationMemoryUnit request;
    public UpdateTranslationMemoryUnitRequest withRequest(openapisdk.models.shared.TranslationMemoryUnit request) {
        this.request = request;
        return this;
    }
}