package openapisdk.models.operations;



public class AnalyticsManagementFiltersListResponse {
    public String contentType;
    public AnalyticsManagementFiltersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Filters filters;
    public AnalyticsManagementFiltersListResponse withFilters(openapisdk.models.shared.Filters filters) {
        this.filters = filters;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementFiltersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}