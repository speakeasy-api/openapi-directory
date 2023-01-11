package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAMediaItemRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateAMediaItemRequestBody request;
    public UpdateAMediaItemRequest withRequest(UpdateAMediaItemRequestBody request) {
        this.request = request;
        return this;
    }
}