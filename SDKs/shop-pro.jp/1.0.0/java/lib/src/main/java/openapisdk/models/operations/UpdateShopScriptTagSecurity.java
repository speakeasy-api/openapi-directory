package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShopScriptTagSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuth2 oAuth2;
    public UpdateShopScriptTagSecurity withOAuth2(openapisdk.models.shared.SchemeOAuth2 oAuth2) {
        this.oAuth2 = oAuth2;
        return this;
    }
}