package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePagePropertiesRequest {
    public UpdatePagePropertiesPathParams pathParams;
    public UpdatePagePropertiesRequest withPathParams(UpdatePagePropertiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePagePropertiesRequestBody request;
    public UpdatePagePropertiesRequest withRequest(UpdatePagePropertiesRequestBody request) {
        this.request = request;
        return this;
    }
}