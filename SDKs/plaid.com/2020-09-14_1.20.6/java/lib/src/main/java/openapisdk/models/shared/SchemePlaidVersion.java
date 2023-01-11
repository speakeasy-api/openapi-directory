package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemePlaidVersion {
    @SpeakeasyMetadata("security:name=Plaid-Version")
    public String apiKey;
    public SchemePlaidVersion withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}