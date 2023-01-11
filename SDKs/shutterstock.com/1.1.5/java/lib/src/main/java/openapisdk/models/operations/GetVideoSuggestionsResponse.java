package openapisdk.models.operations;



public class GetVideoSuggestionsResponse {
    public String contentType;
    public GetVideoSuggestionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoSuggestionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Suggestions suggestions;
    public GetVideoSuggestionsResponse withSuggestions(openapisdk.models.shared.Suggestions suggestions) {
        this.suggestions = suggestions;
        return this;
    }
}