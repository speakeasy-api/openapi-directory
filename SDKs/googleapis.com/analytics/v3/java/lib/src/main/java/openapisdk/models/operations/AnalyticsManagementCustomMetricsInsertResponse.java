package openapisdk.models.operations;



public class AnalyticsManagementCustomMetricsInsertResponse {
    public String contentType;
    public AnalyticsManagementCustomMetricsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomMetric customMetric;
    public AnalyticsManagementCustomMetricsInsertResponse withCustomMetric(openapisdk.models.shared.CustomMetric customMetric) {
        this.customMetric = customMetric;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementCustomMetricsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}