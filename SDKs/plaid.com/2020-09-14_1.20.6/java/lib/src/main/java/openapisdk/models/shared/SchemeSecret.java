package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeSecret {
    @SpeakeasyMetadata("security:name=PLAID-SECRET")
    public String apiKey;
    public SchemeSecret withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}