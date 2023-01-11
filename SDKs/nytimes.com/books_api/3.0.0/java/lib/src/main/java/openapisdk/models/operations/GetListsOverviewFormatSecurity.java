package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsOverviewFormatSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public GetListsOverviewFormatSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}