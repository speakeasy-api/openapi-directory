package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeMerakiApiKey {
    @SpeakeasyMetadata("security:name=X-Cisco-Meraki-API-Key")
    public String apiKey;
    public SchemeMerakiApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}