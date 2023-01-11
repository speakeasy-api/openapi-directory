package openapisdk.models.operations;



public class SearchCseListResponse {
    public String contentType;
    public SearchCseListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Search search;
    public SearchCseListResponse withSearch(openapisdk.models.shared.Search search) {
        this.search = search;
        return this;
    }
    public Long statusCode;
    public SearchCseListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}