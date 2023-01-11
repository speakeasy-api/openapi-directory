package openapisdk.models.operations;



public class AnalyticsManagementFiltersInsertResponse {
    public String contentType;
    public AnalyticsManagementFiltersInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Filter filter;
    public AnalyticsManagementFiltersInsertResponse withFilter(openapisdk.models.shared.Filter filter) {
        this.filter = filter;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementFiltersInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}