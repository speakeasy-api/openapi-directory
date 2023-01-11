package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsUpdateRequest {
    public GistsUpdatePathParams pathParams;
    public GistsUpdateRequest withPathParams(GistsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GistsUpdateRequestBody request;
    public GistsUpdateRequest withRequest(GistsUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}