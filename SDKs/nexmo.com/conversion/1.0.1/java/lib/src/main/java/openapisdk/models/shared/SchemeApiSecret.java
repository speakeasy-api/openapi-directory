package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiSecret {
    @SpeakeasyMetadata("security:name=api_secret")
    public String apiKey;
    public SchemeApiSecret withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}