package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRelationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostRelationRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}