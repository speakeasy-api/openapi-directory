package openapisdk.models.operations;



public class AnalyticsManagementCustomMetricsListResponse {
    public String contentType;
    public AnalyticsManagementCustomMetricsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomMetrics customMetrics;
    public AnalyticsManagementCustomMetricsListResponse withCustomMetrics(openapisdk.models.shared.CustomMetrics customMetrics) {
        this.customMetrics = customMetrics;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomMetricsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}