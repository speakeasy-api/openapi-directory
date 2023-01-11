package openapisdk.models.operations;



public class AnalyticsManagementCustomMetricsGetResponse {
    public String contentType;
    public AnalyticsManagementCustomMetricsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomMetric customMetric;
    public AnalyticsManagementCustomMetricsGetResponse withCustomMetric(openapisdk.models.shared.CustomMetric customMetric) {
        this.customMetric = customMetric;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomMetricsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}