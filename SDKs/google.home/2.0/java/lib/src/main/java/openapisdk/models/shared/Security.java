package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeCastLocalAuthorizationToken castLocalAuthorizationToken;
    public Security withCastLocalAuthorizationToken(SchemeCastLocalAuthorizationToken castLocalAuthorizationToken) {
        this.castLocalAuthorizationToken = castLocalAuthorizationToken;
        return this;
    }
}