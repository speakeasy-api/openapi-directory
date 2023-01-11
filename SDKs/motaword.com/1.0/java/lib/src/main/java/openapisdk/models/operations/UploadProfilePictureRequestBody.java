package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadProfilePictureRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UploadProfilePictureRequestBodyProfilePicture profilePicture;
    public UploadProfilePictureRequestBody withProfilePicture(UploadProfilePictureRequestBodyProfilePicture profilePicture) {
        this.profilePicture = profilePicture;
        return this;
    }
}