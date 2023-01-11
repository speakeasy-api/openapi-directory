package openapisdk.models.operations;



public class AnalyticsadminPropertiesDataStreamsCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesDataStreamsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaDataStream googleAnalyticsAdminV1betaDataStream;
    public AnalyticsadminPropertiesDataStreamsCreateResponse withGoogleAnalyticsAdminV1betaDataStream(openapisdk.models.shared.GoogleAnalyticsAdminV1betaDataStream googleAnalyticsAdminV1betaDataStream) {
        this.googleAnalyticsAdminV1betaDataStream = googleAnalyticsAdminV1betaDataStream;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesDataStreamsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}