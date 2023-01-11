package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSwaggerSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public UpdateSwaggerSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}