package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeUserToken {
    @SpeakeasyMetadata("security:name=user_token")
    public String apiKey;
    public SchemeUserToken withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}