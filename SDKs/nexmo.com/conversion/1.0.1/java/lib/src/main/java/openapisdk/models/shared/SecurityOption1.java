package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SecurityOption1 {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiKey apiKey;
    public SecurityOption1 withApiKey(SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiSecret apiSecret;
    public SecurityOption1 withApiSecret(SchemeApiSecret apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
}