package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoTagSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public AddVideoTagSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
}