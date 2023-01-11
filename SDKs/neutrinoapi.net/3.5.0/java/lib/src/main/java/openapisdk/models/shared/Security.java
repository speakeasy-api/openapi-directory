package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeApiKey apiKey;
    public Security withApiKey(SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeUserId userId;
    public Security withUserId(SchemeUserId userId) {
        this.userId = userId;
        return this;
    }
}