package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApimKey {
    @SpeakeasyMetadata("security:name=Training-Key")
    public String apiKey;
    public SchemeApimKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}