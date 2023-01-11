package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public SchemeJsonWebTokenAuth jsonWebTokenAuth;
    public Security withJsonWebTokenAuth(SchemeJsonWebTokenAuth jsonWebTokenAuth) {
        this.jsonWebTokenAuth = jsonWebTokenAuth;
        return this;
    }
}