package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=cookie")
    public openapisdk.models.shared.SchemeCookieSid cookieSid;
    public UpdateUserSecurity withCookieSid(openapisdk.models.shared.SchemeCookieSid cookieSid) {
        this.cookieSid = cookieSid;
        return this;
    }
}