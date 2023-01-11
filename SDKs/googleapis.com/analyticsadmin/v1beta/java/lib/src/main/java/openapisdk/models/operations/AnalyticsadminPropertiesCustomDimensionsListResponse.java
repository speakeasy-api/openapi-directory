package openapisdk.models.operations;



public class AnalyticsadminPropertiesCustomDimensionsListResponse {
    public String contentType;
    public AnalyticsadminPropertiesCustomDimensionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomDimensionsResponse googleAnalyticsAdminV1betaListCustomDimensionsResponse;
    public AnalyticsadminPropertiesCustomDimensionsListResponse withGoogleAnalyticsAdminV1betaListCustomDimensionsResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomDimensionsResponse googleAnalyticsAdminV1betaListCustomDimensionsResponse) {
        this.googleAnalyticsAdminV1betaListCustomDimensionsResponse = googleAnalyticsAdminV1betaListCustomDimensionsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesCustomDimensionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}