package openapisdk.models.operations;



public class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse {
    public String contentType;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret googleAnalyticsAdminV1betaMeasurementProtocolSecret;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse withGoogleAnalyticsAdminV1betaMeasurementProtocolSecret(openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret googleAnalyticsAdminV1betaMeasurementProtocolSecret) {
        this.googleAnalyticsAdminV1betaMeasurementProtocolSecret = googleAnalyticsAdminV1betaMeasurementProtocolSecret;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}