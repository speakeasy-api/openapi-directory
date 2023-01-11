package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=cookie")
    public SchemeCookieSid cookieSid;
    public Security withCookieSid(SchemeCookieSid cookieSid) {
        this.cookieSid = cookieSid;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeHeaderApiKey headerApiKey;
    public Security withHeaderApiKey(SchemeHeaderApiKey headerApiKey) {
        this.headerApiKey = headerApiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeQueryApiKey queryApiKey;
    public Security withQueryApiKey(SchemeQueryApiKey queryApiKey) {
        this.queryApiKey = queryApiKey;
        return this;
    }
}