package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsActivateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostTargetsActivateRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}