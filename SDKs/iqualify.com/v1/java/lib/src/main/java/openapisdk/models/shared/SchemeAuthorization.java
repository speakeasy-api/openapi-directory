package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAuthorization {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeAuthorization withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}