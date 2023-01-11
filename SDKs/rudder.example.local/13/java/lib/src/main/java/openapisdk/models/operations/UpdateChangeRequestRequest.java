package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChangeRequestRequest {
    public UpdateChangeRequestPathParams pathParams;
    public UpdateChangeRequestRequest withPathParams(UpdateChangeRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateChangeRequestRequestBody request;
    public UpdateChangeRequestRequest withRequest(UpdateChangeRequestRequestBody request) {
        this.request = request;
        return this;
    }
}