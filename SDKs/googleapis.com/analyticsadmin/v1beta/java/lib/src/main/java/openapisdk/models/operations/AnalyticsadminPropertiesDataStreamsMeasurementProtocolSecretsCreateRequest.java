package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest {
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams pathParams;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest withPathParams(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams queryParams;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest withQueryParams(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput request;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest withRequest(openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity security;
    public AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest withSecurity(AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity security) {
        this.security = security;
        return this;
    }
}