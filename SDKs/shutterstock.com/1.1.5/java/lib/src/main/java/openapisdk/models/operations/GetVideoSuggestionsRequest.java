package openapisdk.models.operations;



public class GetVideoSuggestionsRequest {
    public GetVideoSuggestionsQueryParams queryParams;
    public GetVideoSuggestionsRequest withQueryParams(GetVideoSuggestionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVideoSuggestionsSecurity security;
    public GetVideoSuggestionsRequest withSecurity(GetVideoSuggestionsSecurity security) {
        this.security = security;
        return this;
    }
}