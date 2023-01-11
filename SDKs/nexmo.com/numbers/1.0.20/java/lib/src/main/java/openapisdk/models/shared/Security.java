package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiKey apiKey;
    public Security withApiKey(SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiSecret apiSecret;
    public Security withApiSecret(SchemeApiSecret apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
}