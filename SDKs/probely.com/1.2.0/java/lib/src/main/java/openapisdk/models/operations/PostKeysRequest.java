package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostKeysRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKeyInput request;
    public PostKeysRequest withRequest(openapisdk.models.shared.ApiKeyInput request) {
        this.request = request;
        return this;
    }
}