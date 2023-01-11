package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemePrivateAppsLegacy {
    @SpeakeasyMetadata("security:name=private-app-legacy")
    public String apiKey;
    public SchemePrivateAppsLegacy withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}