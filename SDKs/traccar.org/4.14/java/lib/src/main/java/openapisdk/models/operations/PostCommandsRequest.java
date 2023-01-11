package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommandsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Command request;
    public PostCommandsRequest withRequest(openapisdk.models.shared.Command request) {
        this.request = request;
        return this;
    }
}