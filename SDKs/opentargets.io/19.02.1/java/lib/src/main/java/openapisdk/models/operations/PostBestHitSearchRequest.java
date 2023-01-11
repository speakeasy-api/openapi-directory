package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBestHitSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostBestHitSearchRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}