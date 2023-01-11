package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetByEnsgidRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostTargetByEnsgidRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}