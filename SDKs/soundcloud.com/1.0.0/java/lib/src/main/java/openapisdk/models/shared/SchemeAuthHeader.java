package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAuthHeader {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeAuthHeader withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}