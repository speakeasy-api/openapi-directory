package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCveRequestBody request;
    public UpdateCveRequest withRequest(UpdateCveRequestBody request) {
        this.request = request;
        return this;
    }
}