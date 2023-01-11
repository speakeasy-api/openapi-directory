package openapisdk.models.operations;



public class AnalyticsadminPropertiesCustomDimensionsCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesCustomDimensionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomDimension googleAnalyticsAdminV1betaCustomDimension;
    public AnalyticsadminPropertiesCustomDimensionsCreateResponse withGoogleAnalyticsAdminV1betaCustomDimension(openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomDimension googleAnalyticsAdminV1betaCustomDimension) {
        this.googleAnalyticsAdminV1betaCustomDimension = googleAnalyticsAdminV1betaCustomDimension;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesCustomDimensionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}