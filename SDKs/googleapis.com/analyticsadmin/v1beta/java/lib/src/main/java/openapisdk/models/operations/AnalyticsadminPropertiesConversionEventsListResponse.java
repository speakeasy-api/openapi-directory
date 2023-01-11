package openapisdk.models.operations;



public class AnalyticsadminPropertiesConversionEventsListResponse {
    public String contentType;
    public AnalyticsadminPropertiesConversionEventsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListConversionEventsResponse googleAnalyticsAdminV1betaListConversionEventsResponse;
    public AnalyticsadminPropertiesConversionEventsListResponse withGoogleAnalyticsAdminV1betaListConversionEventsResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListConversionEventsResponse googleAnalyticsAdminV1betaListConversionEventsResponse) {
        this.googleAnalyticsAdminV1betaListConversionEventsResponse = googleAnalyticsAdminV1betaListConversionEventsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesConversionEventsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}