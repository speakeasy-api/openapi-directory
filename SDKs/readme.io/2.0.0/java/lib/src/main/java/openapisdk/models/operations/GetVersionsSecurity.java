package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVersionsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GetVersionsSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}