package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadUserProfilePictureRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UploadUserProfilePictureRequestBodyProfilePicture profilePicture;
    public UploadUserProfilePictureRequestBody withProfilePicture(UploadUserProfilePictureRequestBodyProfilePicture profilePicture) {
        this.profilePicture = profilePicture;
        return this;
    }
}