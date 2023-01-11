package openapisdk.models.operations;



public class AnalyticsManagementCustomMetricsPatchResponse {
    public String contentType;
    public AnalyticsManagementCustomMetricsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomMetric customMetric;
    public AnalyticsManagementCustomMetricsPatchResponse withCustomMetric(openapisdk.models.shared.CustomMetric customMetric) {
        this.customMetric = customMetric;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomMetricsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}