package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeDeveloperHapikey {
    @SpeakeasyMetadata("security:name=hapikey")
    public String apiKey;
    public SchemeDeveloperHapikey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}