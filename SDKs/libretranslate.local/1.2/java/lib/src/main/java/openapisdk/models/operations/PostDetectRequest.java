package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetectRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public String request;
    public PostDetectRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}