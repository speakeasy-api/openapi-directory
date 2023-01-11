package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommandsSendRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Command request;
    public PostCommandsSendRequest withRequest(openapisdk.models.shared.Command request) {
        this.request = request;
        return this;
    }
}