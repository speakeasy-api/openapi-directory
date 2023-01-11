package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeQueryApiKey {
    @SpeakeasyMetadata("security:name=key")
    public String apiKey;
    public SchemeQueryApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}