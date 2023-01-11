package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCookieAuth {
    @SpeakeasyMetadata("security:name=portal")
    public String apiKey;
    public SchemeCookieAuth withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}