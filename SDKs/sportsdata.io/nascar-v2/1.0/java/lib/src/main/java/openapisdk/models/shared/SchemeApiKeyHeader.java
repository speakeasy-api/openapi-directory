package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiKeyHeader {
    @SpeakeasyMetadata("security:name=Ocp-Apim-Subscription-Key")
    public String apiKey;
    public SchemeApiKeyHeader withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}