package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeDeveloperKey {
    @SpeakeasyMetadata("security:name=x-api-key")
    public String apiKey;
    public SchemeDeveloperKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}