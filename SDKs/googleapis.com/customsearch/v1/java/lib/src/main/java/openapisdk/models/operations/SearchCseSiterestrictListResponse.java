package openapisdk.models.operations;



public class SearchCseSiterestrictListResponse {
    public String contentType;
    public SearchCseSiterestrictListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Search search;
    public SearchCseSiterestrictListResponse withSearch(openapisdk.models.shared.Search search) {
        this.search = search;
        return this;
    }
    public Long statusCode;
    public SearchCseSiterestrictListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}