package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlbumCustomThumbSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public CreateAlbumCustomThumbSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
}