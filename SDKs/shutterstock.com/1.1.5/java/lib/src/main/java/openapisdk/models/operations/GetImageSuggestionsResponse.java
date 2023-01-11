package openapisdk.models.operations;



public class GetImageSuggestionsResponse {
    public String contentType;
    public GetImageSuggestionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImageSuggestionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Suggestions suggestions;
    public GetImageSuggestionsResponse withSuggestions(openapisdk.models.shared.Suggestions suggestions) {
        this.suggestions = suggestions;
        return this;
    }
}