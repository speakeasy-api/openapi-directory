package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeyByIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=cookie")
    public openapisdk.models.shared.SchemeCookieSid cookieSid;
    public GetKeyByIdSecurity withCookieSid(openapisdk.models.shared.SchemeCookieSid cookieSid) {
        this.cookieSid = cookieSid;
        return this;
    }
}