package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeXTheySaidSoApiSecret {
    @SpeakeasyMetadata("security:name=X-TheySaidSo-Api-Secret")
    public String apiKey;
    public SchemeXTheySaidSoApiSecret withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}