package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeXMathtoolsApiSecret {
    @SpeakeasyMetadata("security:name=X-Mathtools-Api-Secret")
    public String apiKey;
    public SchemeXMathtoolsApiSecret withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}