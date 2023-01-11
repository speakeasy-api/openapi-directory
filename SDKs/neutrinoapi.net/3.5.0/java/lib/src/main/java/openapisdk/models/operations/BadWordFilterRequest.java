package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BadWordFilterRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public BadWordFilterRequestBody request;
    public BadWordFilterRequest withRequest(BadWordFilterRequestBody request) {
        this.request = request;
        return this;
    }
}