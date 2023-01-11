package openapisdk.models.operations;



public class SearchEverywhereResponse {
    public String contentType;
    public SearchEverywhereResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchEverywhereResult searchEverywhereResult;
    public SearchEverywhereResponse withSearchEverywhereResult(openapisdk.models.shared.SearchEverywhereResult searchEverywhereResult) {
        this.searchEverywhereResult = searchEverywhereResult;
        return this;
    }
    public Long statusCode;
    public SearchEverywhereResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}