package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStyleGuideRequest {
    public CreateStyleGuidePathParams pathParams;
    public CreateStyleGuideRequest withPathParams(CreateStyleGuidePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateStyleGuideRequestBody request;
    public CreateStyleGuideRequest withRequest(CreateStyleGuideRequestBody request) {
        this.request = request;
        return this;
    }
}