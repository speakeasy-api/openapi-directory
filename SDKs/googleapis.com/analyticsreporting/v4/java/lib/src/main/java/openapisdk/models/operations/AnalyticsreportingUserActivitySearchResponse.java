package openapisdk.models.operations;



public class AnalyticsreportingUserActivitySearchResponse {
    public String contentType;
    public AnalyticsreportingUserActivitySearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchUserActivityResponse searchUserActivityResponse;
    public AnalyticsreportingUserActivitySearchResponse withSearchUserActivityResponse(openapisdk.models.shared.SearchUserActivityResponse searchUserActivityResponse) {
        this.searchUserActivityResponse = searchUserActivityResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsreportingUserActivitySearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}