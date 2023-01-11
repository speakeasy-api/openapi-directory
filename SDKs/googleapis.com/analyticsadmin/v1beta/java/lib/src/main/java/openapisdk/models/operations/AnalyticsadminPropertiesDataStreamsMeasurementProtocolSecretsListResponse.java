package openapisdk.models.operations;



public class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse {
    public String contentType;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse withGoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse(openapisdk.models.shared.GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse) {
        this.googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse = googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}