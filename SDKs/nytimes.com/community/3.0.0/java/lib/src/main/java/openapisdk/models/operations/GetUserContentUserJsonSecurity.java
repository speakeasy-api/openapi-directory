package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserContentUserJsonSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GetUserContentUserJsonSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}