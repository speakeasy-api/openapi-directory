package openapisdk.models.operations;



public class AnalyticsManagementCustomMetricsUpdateResponse {
    public String contentType;
    public AnalyticsManagementCustomMetricsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomMetric customMetric;
    public AnalyticsManagementCustomMetricsUpdateResponse withCustomMetric(openapisdk.models.shared.CustomMetric customMetric) {
        this.customMetric = customMetric;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomMetricsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}