package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeLegacyApiKey {
    @SpeakeasyMetadata("security:name=apiKey")
    public String apiKey;
    public SchemeLegacyApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}