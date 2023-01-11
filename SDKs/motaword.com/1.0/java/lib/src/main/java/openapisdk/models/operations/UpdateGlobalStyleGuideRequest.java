package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalStyleGuideRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateGlobalStyleGuideRequestBody request;
    public UpdateGlobalStyleGuideRequest withRequest(UpdateGlobalStyleGuideRequestBody request) {
        this.request = request;
        return this;
    }
}