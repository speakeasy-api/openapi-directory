package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeCookieAuth cookieAuth;
    public Security withCookieAuth(SchemeCookieAuth cookieAuth) {
        this.cookieAuth = cookieAuth;
        return this;
    }
}