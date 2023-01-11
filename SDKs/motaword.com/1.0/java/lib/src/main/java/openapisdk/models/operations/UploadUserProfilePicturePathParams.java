package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadUserProfilePicturePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Long userId;
    public UploadUserProfilePicturePathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}