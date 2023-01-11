package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeTokenAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeTokenAuth withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}