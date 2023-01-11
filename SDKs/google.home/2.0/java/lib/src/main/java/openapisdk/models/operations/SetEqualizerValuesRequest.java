package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetEqualizerValuesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetEqualizerValuesRequest request;
    public SetEqualizerValuesRequest withRequest(openapisdk.models.shared.SetEqualizerValuesRequest request) {
        this.request = request;
        return this;
    }
}