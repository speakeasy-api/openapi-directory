package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCookieSid {
    @SpeakeasyMetadata("security:name=brain.sid")
    public String apiKey;
    public SchemeCookieSid withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}