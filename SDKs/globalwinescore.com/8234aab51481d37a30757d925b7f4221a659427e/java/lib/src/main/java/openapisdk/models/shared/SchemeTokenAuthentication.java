package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeTokenAuthentication {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeTokenAuthentication withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}