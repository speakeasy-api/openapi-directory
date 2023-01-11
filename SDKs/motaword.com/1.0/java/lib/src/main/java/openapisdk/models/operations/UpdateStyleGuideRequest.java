package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStyleGuideRequest {
    public UpdateStyleGuidePathParams pathParams;
    public UpdateStyleGuideRequest withPathParams(UpdateStyleGuidePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateStyleGuideRequestBody request;
    public UpdateStyleGuideRequest withRequest(UpdateStyleGuideRequestBody request) {
        this.request = request;
        return this;
    }
}