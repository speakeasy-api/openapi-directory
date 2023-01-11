package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiSpecificationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public UpdateApiSpecificationSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}