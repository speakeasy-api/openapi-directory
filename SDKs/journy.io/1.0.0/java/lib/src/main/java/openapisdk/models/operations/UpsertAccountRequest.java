package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpsertAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpsertAccountRequestBody request;
    public UpsertAccountRequest withRequest(UpsertAccountRequestBody request) {
        this.request = request;
        return this;
    }
}