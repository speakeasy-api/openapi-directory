package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVodRequest {
    public CreateVodPathParams pathParams;
    public CreateVodRequest withPathParams(CreateVodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVodRequestBody request;
    public CreateVodRequest withRequest(CreateVodRequestBody request) {
        this.request = request;
        return this;
    }
}