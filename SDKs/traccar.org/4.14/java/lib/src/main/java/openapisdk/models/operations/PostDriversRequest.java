package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDriversRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Driver request;
    public PostDriversRequest withRequest(openapisdk.models.shared.Driver request) {
        this.request = request;
        return this;
    }
}