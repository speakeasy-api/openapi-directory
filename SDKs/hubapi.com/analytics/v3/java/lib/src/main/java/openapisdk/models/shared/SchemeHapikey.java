package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeHapikey {
    @SpeakeasyMetadata("security:name=hapikey")
    public String apiKey;
    public SchemeHapikey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}