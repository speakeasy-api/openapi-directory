package openapisdk.models.operations;



public class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse {
    public String contentType;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret googleAnalyticsAdminV1betaMeasurementProtocolSecret;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse withGoogleAnalyticsAdminV1betaMeasurementProtocolSecret(openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret googleAnalyticsAdminV1betaMeasurementProtocolSecret) {
        this.googleAnalyticsAdminV1betaMeasurementProtocolSecret = googleAnalyticsAdminV1betaMeasurementProtocolSecret;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}