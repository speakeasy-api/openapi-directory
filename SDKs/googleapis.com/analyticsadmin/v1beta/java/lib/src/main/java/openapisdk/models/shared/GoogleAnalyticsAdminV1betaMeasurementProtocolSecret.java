package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaMeasurementProtocolSecret
 * A secret value used for sending hits to Measurement Protocol.
**/
public class GoogleAnalyticsAdminV1betaMeasurementProtocolSecret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaMeasurementProtocolSecret withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaMeasurementProtocolSecret withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretValue")
    public String secretValue;
    public GoogleAnalyticsAdminV1betaMeasurementProtocolSecret withSecretValue(String secretValue) {
        this.secretValue = secretValue;
        return this;
    }
}