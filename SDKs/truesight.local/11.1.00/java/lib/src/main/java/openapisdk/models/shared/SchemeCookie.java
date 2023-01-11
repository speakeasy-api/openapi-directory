package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCookie {
    @SpeakeasyMetadata("security:name=Cookie")
    public String apiKey;
    public SchemeCookie withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}