package openapisdk.models.operations;



public class AnalyticsManagementFiltersPatchResponse {
    public String contentType;
    public AnalyticsManagementFiltersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Filter filter;
    public AnalyticsManagementFiltersPatchResponse withFilter(openapisdk.models.shared.Filter filter) {
        this.filter = filter;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementFiltersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}