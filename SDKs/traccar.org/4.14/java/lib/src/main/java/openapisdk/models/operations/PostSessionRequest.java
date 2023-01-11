package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSessionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public PostSessionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}