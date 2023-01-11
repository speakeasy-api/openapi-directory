package openapisdk.models.operations;



public class AnalyticsadminPropertiesCustomMetricsCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesCustomMetricsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomMetric googleAnalyticsAdminV1betaCustomMetric;
    public AnalyticsadminPropertiesCustomMetricsCreateResponse withGoogleAnalyticsAdminV1betaCustomMetric(openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomMetric googleAnalyticsAdminV1betaCustomMetric) {
        this.googleAnalyticsAdminV1betaCustomMetric = googleAnalyticsAdminV1betaCustomMetric;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesCustomMetricsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}