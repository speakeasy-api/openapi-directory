package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateABlockRequest {
    public UpdateABlockPathParams pathParams;
    public UpdateABlockRequest withPathParams(UpdateABlockPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateABlockRequestBody request;
    public UpdateABlockRequest withRequest(UpdateABlockRequestBody request) {
        this.request = request;
        return this;
    }
}