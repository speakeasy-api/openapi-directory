package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SerpRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SerpData request;
    public SerpRequest withRequest(openapisdk.models.shared.SerpData request) {
        this.request = request;
        return this;
    }
}