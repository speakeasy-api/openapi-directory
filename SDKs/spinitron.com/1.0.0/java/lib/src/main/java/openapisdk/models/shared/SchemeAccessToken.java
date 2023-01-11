package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAccessToken {
    @SpeakeasyMetadata("security:name=access-token")
    public String apiKey;
    public SchemeAccessToken withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}