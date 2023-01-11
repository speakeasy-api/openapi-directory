package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput
 * A secret value used for sending hits to Measurement Protocol.
**/
public class GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}