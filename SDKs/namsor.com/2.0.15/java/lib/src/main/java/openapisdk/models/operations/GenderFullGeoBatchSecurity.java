package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderFullGeoBatchSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GenderFullGeoBatchSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}