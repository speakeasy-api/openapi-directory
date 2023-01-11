package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCastLocalAuthorizationToken {
    @SpeakeasyMetadata("security:name=cast-local-authorization-token")
    public String apiKey;
    public SchemeCastLocalAuthorizationToken withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}