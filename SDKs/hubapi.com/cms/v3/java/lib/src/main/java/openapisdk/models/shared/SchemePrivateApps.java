package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemePrivateApps {
    @SpeakeasyMetadata("security:name=private-app")
    public String apiKey;
    public SchemePrivateApps withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}