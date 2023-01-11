package openapisdk.models.operations;



public class AnalyticsadminPropertiesDataStreamsListResponse {
    public String contentType;
    public AnalyticsadminPropertiesDataStreamsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListDataStreamsResponse googleAnalyticsAdminV1betaListDataStreamsResponse;
    public AnalyticsadminPropertiesDataStreamsListResponse withGoogleAnalyticsAdminV1betaListDataStreamsResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListDataStreamsResponse googleAnalyticsAdminV1betaListDataStreamsResponse) {
        this.googleAnalyticsAdminV1betaListDataStreamsResponse = googleAnalyticsAdminV1betaListDataStreamsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesDataStreamsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}