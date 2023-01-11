package openapisdk.models.operations;



public class AnalyticsadminPropertiesCustomMetricsListResponse {
    public String contentType;
    public AnalyticsadminPropertiesCustomMetricsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomMetricsResponse googleAnalyticsAdminV1betaListCustomMetricsResponse;
    public AnalyticsadminPropertiesCustomMetricsListResponse withGoogleAnalyticsAdminV1betaListCustomMetricsResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomMetricsResponse googleAnalyticsAdminV1betaListCustomMetricsResponse) {
        this.googleAnalyticsAdminV1betaListCustomMetricsResponse = googleAnalyticsAdminV1betaListCustomMetricsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesCustomMetricsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}