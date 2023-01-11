package openapisdk.models.operations;



public class AnalyticsadminPropertiesCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaProperty googleAnalyticsAdminV1betaProperty;
    public AnalyticsadminPropertiesCreateResponse withGoogleAnalyticsAdminV1betaProperty(openapisdk.models.shared.GoogleAnalyticsAdminV1betaProperty googleAnalyticsAdminV1betaProperty) {
        this.googleAnalyticsAdminV1betaProperty = googleAnalyticsAdminV1betaProperty;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}