package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApimKey {
    @SpeakeasyMetadata("security:name=Prediction-Key")
    public String apiKey;
    public SchemeApimKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}