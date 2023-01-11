package openapisdk.models.operations;



public class WebmastersSearchanalyticsQueryResponse {
    public String contentType;
    public WebmastersSearchanalyticsQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchAnalyticsQueryResponse searchAnalyticsQueryResponse;
    public WebmastersSearchanalyticsQueryResponse withSearchAnalyticsQueryResponse(openapisdk.models.shared.SearchAnalyticsQueryResponse searchAnalyticsQueryResponse) {
        this.searchAnalyticsQueryResponse = searchAnalyticsQueryResponse;
        return this;
    }
    public Long statusCode;
    public WebmastersSearchanalyticsQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}