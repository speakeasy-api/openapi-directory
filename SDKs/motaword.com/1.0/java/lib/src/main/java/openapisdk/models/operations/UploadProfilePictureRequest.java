package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadProfilePictureRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadProfilePictureRequestBody request;
    public UploadProfilePictureRequest withRequest(UploadProfilePictureRequestBody request) {
        this.request = request;
        return this;
    }
}