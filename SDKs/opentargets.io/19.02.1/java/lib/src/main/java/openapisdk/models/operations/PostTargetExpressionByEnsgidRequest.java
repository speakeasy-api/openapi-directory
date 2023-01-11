package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetExpressionByEnsgidRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostTargetExpressionByEnsgidRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}