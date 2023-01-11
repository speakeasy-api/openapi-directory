package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGraphQlRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GraphQlRequest request;
    public PostGraphQlRequest withRequest(openapisdk.models.shared.GraphQlRequest request) {
        this.request = request;
        return this;
    }
}