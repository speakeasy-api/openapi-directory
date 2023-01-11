package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public SchemeJwtAuth jwtAuth;
    public Security withJwtAuth(SchemeJwtAuth jwtAuth) {
        this.jwtAuth = jwtAuth;
        return this;
    }
}