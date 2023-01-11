package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadUserProfilePictureRequest {
    public UploadUserProfilePicturePathParams pathParams;
    public UploadUserProfilePictureRequest withPathParams(UploadUserProfilePicturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadUserProfilePictureRequestBody request;
    public UploadUserProfilePictureRequest withRequest(UploadUserProfilePictureRequestBody request) {
        this.request = request;
        return this;
    }
    public UploadUserProfilePictureSecurity security;
    public UploadUserProfilePictureRequest withSecurity(UploadUserProfilePictureSecurity security) {
        this.security = security;
        return this;
    }
}