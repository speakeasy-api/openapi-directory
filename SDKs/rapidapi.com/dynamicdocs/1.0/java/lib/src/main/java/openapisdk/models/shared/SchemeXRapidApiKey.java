package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeXRapidApiKey {
    @SpeakeasyMetadata("security:name=RapidAPI.com API Key")
    public String apiKey;
    public SchemeXRapidApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}