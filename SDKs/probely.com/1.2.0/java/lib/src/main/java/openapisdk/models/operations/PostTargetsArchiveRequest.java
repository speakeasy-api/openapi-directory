package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsArchiveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostTargetsArchiveRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}