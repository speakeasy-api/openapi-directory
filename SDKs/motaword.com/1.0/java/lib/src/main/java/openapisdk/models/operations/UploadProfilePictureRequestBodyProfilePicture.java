package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadProfilePictureRequestBodyProfilePicture {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UploadProfilePictureRequestBodyProfilePicture withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=profile_picture")
    public String profilePicture;
    public UploadProfilePictureRequestBodyProfilePicture withProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
        return this;
    }
}