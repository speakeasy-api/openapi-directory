package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthRevokeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAuthRevokeRequestBody request;
    public PostAuthRevokeRequest withRequest(PostAuthRevokeRequestBody request) {
        this.request = request;
        return this;
    }
}