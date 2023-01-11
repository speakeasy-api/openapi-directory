package openapisdk.models.operations;



public class GetSearchEntitiesResponse {
    public String contentType;
    public GetSearchEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResult searchResult;
    public GetSearchEntitiesResponse withSearchResult(openapisdk.models.shared.SearchResult searchResult) {
        this.searchResult = searchResult;
        return this;
    }
    public Long statusCode;
    public GetSearchEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}