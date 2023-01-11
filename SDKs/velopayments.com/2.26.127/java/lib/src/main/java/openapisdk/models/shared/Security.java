package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public SchemeOAuth2 oAuth2;
    public Security withOAuth2(SchemeOAuth2 oAuth2) {
        this.oAuth2 = oAuth2;
        return this;
    }
}