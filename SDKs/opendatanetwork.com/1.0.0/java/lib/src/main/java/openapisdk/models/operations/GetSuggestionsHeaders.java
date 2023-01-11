package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuggestionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public GetSuggestionsHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}