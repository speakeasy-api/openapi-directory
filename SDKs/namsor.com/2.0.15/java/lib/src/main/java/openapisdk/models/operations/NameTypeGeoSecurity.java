package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NameTypeGeoSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public NameTypeGeoSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}