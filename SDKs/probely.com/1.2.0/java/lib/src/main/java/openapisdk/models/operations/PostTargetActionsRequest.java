package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetActionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostTargetActionsRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}