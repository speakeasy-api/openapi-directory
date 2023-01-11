package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVodBackgroundSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public CreateVodBackgroundSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
}