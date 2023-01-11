package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageKeywordSuggestionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchEntitiesRequest request;
    public GetImageKeywordSuggestionsRequest withRequest(openapisdk.models.shared.SearchEntitiesRequest request) {
        this.request = request;
        return this;
    }
    public GetImageKeywordSuggestionsSecurity security;
    public GetImageKeywordSuggestionsRequest withSecurity(GetImageKeywordSuggestionsSecurity security) {
        this.security = security;
        return this;
    }
}