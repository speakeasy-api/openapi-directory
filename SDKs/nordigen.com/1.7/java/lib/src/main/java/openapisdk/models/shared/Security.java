package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeTokenAuth tokenAuth;
    public Security withTokenAuth(SchemeTokenAuth tokenAuth) {
        this.tokenAuth = tokenAuth;
        return this;
    }
}