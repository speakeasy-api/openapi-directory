package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeRhIdentity {
    @SpeakeasyMetadata("security:name=x-rh-identity")
    public String apiKey;
    public SchemeRhIdentity withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}