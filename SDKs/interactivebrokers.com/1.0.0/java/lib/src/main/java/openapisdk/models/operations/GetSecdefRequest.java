package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecdefRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetSecdefRequestBody request;
    public GetSecdefRequest withRequest(GetSecdefRequestBody request) {
        this.request = request;
        return this;
    }
}