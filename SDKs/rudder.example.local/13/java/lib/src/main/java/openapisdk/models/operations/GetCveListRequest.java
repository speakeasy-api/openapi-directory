package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCveListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetCveListRequestBody request;
    public GetCveListRequest withRequest(GetCveListRequestBody request) {
        this.request = request;
        return this;
    }
}