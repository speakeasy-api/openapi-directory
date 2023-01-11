package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeUserId {
    @SpeakeasyMetadata("security:name=user-id")
    public String apiKey;
    public SchemeUserId withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}