package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadUserProfilePictureRequestBodyProfilePicture {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadUserProfilePictureRequestBodyProfilePicture withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=profile_picture")
    public String profilePicture;
    public UploadUserProfilePictureRequestBodyProfilePicture withProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
        return this;
    }
}