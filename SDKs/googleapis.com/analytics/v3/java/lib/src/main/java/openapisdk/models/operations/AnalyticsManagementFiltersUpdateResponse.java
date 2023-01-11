package openapisdk.models.operations;



public class AnalyticsManagementFiltersUpdateResponse {
    public String contentType;
    public AnalyticsManagementFiltersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Filter filter;
    public AnalyticsManagementFiltersUpdateResponse withFilter(openapisdk.models.shared.Filter filter) {
        this.filter = filter;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementFiltersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}