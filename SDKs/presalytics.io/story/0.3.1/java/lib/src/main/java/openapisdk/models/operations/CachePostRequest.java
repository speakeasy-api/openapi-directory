package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CachePostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CachePostRequest request;
    public CachePostRequest withRequest(openapisdk.models.shared.CachePostRequest request) {
        this.request = request;
        return this;
    }
}