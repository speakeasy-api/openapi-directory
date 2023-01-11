package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse
 * Response message for ListMeasurementProtocolSecret RPC
**/
public class GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementProtocolSecrets")
    public GoogleAnalyticsAdminV1betaMeasurementProtocolSecret[] measurementProtocolSecrets;
    public GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse withMeasurementProtocolSecrets(GoogleAnalyticsAdminV1betaMeasurementProtocolSecret[] measurementProtocolSecrets) {
        this.measurementProtocolSecrets = measurementProtocolSecrets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}