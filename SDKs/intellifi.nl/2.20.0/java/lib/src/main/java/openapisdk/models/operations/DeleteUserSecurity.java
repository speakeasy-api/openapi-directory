package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=cookie")
    public openapisdk.models.shared.SchemeCookieSid cookieSid;
    public DeleteUserSecurity withCookieSid(openapisdk.models.shared.SchemeCookieSid cookieSid) {
        this.cookieSid = cookieSid;
        return this;
    }
}