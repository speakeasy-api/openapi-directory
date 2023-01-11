package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CommitmentSettingsInput
 * Commitment settings for commitment-based offers.
**/
public class GoogleCloudChannelV1CommitmentSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSettings")
    public GoogleCloudChannelV1RenewalSettingsInput renewalSettings;
    public GoogleCloudChannelV1CommitmentSettingsInput withRenewalSettings(GoogleCloudChannelV1RenewalSettingsInput renewalSettings) {
        this.renewalSettings = renewalSettings;
        return this;
    }
}