package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApikey {
    @SpeakeasyMetadata("security:name=api-key")
    public String apiKey;
    public SchemeApikey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}