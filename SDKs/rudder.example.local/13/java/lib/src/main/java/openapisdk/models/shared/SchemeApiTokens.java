package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiTokens {
    @SpeakeasyMetadata("security:name=X-API-Token")
    public String apiKey;
    public SchemeApiTokens withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}