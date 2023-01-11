package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeJwt jwt;
    public Security withJwt(SchemeJwt jwt) {
        this.jwt = jwt;
        return this;
    }
}