package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthObtainRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Login request;
    public PostAuthObtainRequest withRequest(openapisdk.models.shared.Login request) {
        this.request = request;
        return this;
    }
}