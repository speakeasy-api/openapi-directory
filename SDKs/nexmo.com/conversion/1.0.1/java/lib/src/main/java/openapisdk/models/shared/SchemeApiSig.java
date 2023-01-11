package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiSig {
    @SpeakeasyMetadata("security:name=sig")
    public String apiKey;
    public SchemeApiSig withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}