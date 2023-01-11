package openapisdk.models.operations;



public class AnalyticsadminPropertiesConversionEventsCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesConversionEventsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaConversionEvent googleAnalyticsAdminV1betaConversionEvent;
    public AnalyticsadminPropertiesConversionEventsCreateResponse withGoogleAnalyticsAdminV1betaConversionEvent(openapisdk.models.shared.GoogleAnalyticsAdminV1betaConversionEvent googleAnalyticsAdminV1betaConversionEvent) {
        this.googleAnalyticsAdminV1betaConversionEvent = googleAnalyticsAdminV1betaConversionEvent;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesConversionEventsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}