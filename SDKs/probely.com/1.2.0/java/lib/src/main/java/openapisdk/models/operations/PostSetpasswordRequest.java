package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetpasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostSetpasswordRequestBody request;
    public PostSetpasswordRequest withRequest(PostSetpasswordRequestBody request) {
        this.request = request;
        return this;
    }
}