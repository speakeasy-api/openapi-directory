package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpsertUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpsertUserRequestBody request;
    public UpsertUserRequest withRequest(UpsertUserRequestBody request) {
        this.request = request;
        return this;
    }
}