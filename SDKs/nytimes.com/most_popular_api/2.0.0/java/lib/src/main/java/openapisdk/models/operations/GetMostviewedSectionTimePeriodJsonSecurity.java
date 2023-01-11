package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMostviewedSectionTimePeriodJsonSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GetMostviewedSectionTimePeriodJsonSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}