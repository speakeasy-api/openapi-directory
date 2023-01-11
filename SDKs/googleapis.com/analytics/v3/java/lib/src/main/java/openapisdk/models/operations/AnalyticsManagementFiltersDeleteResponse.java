package openapisdk.models.operations;



public class AnalyticsManagementFiltersDeleteResponse {
    public String contentType;
    public AnalyticsManagementFiltersDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Filter filter;
    public AnalyticsManagementFiltersDeleteResponse withFilter(openapisdk.models.shared.Filter filter) {
        this.filter = filter;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementFiltersDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}