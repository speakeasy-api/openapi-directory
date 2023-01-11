package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeysSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=cookie")
    public openapisdk.models.shared.SchemeCookieSid cookieSid;
    public GetKeysSecurity withCookieSid(openapisdk.models.shared.SchemeCookieSid cookieSid) {
        this.cookieSid = cookieSid;
        return this;
    }
}