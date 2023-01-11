package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadUserProfilePictureSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeMwoAuth mwoAuth;
    public UploadUserProfilePictureSecurity withMwoAuth(openapisdk.models.shared.SchemeMwoAuth mwoAuth) {
        this.mwoAuth = mwoAuth;
        return this;
    }
}