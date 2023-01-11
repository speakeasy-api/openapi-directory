package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeToken {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeToken withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}