package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoPrivacyDomainSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public AddVideoPrivacyDomainSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
}