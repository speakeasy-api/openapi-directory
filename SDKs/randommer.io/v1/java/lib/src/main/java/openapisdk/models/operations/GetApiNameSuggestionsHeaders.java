package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiNameSuggestionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public GetApiNameSuggestionsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}