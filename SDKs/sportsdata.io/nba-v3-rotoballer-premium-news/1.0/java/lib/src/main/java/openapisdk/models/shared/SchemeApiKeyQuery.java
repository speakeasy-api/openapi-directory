package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiKeyQuery {
    @SpeakeasyMetadata("security:name=subscription-key")
    public String apiKey;
    public SchemeApiKeyQuery withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}