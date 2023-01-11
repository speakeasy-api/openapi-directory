package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersCreateServerRequest request;
    public PostServersRequest withRequest(PostServersCreateServerRequest request) {
        this.request = request;
        return this;
    }
}