package openapisdk.models.operations;



public class AnalyticsManagementFiltersGetResponse {
    public String contentType;
    public AnalyticsManagementFiltersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Filter filter;
    public AnalyticsManagementFiltersGetResponse withFilter(openapisdk.models.shared.Filter filter) {
        this.filter = filter;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementFiltersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}