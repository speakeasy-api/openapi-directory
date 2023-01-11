package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeInternalApiKey {
    @SpeakeasyMetadata("security:name=ckan_api_key")
    public String apiKey;
    public SchemeInternalApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}