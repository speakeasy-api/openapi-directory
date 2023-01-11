package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTranslateRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public String request;
    public PostTranslateRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}