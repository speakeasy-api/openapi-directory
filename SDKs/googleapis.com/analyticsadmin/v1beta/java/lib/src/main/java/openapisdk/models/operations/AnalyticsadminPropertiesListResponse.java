package openapisdk.models.operations;



public class AnalyticsadminPropertiesListResponse {
    public String contentType;
    public AnalyticsadminPropertiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListPropertiesResponse googleAnalyticsAdminV1betaListPropertiesResponse;
    public AnalyticsadminPropertiesListResponse withGoogleAnalyticsAdminV1betaListPropertiesResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListPropertiesResponse googleAnalyticsAdminV1betaListPropertiesResponse) {
        this.googleAnalyticsAdminV1betaListPropertiesResponse = googleAnalyticsAdminV1betaListPropertiesResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}