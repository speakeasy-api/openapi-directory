package openapisdk.models.operations;



public class GetImageSuggestionsRequest {
    public GetImageSuggestionsQueryParams queryParams;
    public GetImageSuggestionsRequest withQueryParams(GetImageSuggestionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageSuggestionsSecurity security;
    public GetImageSuggestionsRequest withSecurity(GetImageSuggestionsSecurity security) {
        this.security = security;
        return this;
    }
}