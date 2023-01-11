package openapisdk.models.operations;



public class SearchResponse {
    public String contentType;
    public SearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public SearchResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public SearchResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public SearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}