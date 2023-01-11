package openapisdk.models.operations;



public class GetImageKeywordSuggestionsResponse {
    public String contentType;
    public GetImageKeywordSuggestionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object searchEntitiesResponse;
    public GetImageKeywordSuggestionsResponse withSearchEntitiesResponse(Object searchEntitiesResponse) {
        this.searchEntitiesResponse = searchEntitiesResponse;
        return this;
    }
    public Long statusCode;
    public GetImageKeywordSuggestionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}