package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChangelogSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public CreateChangelogSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}