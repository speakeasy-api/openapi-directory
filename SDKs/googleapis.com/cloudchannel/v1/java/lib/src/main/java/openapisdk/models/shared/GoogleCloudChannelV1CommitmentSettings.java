package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CommitmentSettings
 * Commitment settings for commitment-based offers.
**/
public class GoogleCloudChannelV1CommitmentSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GoogleCloudChannelV1CommitmentSettings withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSettings")
    public GoogleCloudChannelV1RenewalSettings renewalSettings;
    public GoogleCloudChannelV1CommitmentSettings withRenewalSettings(GoogleCloudChannelV1RenewalSettings renewalSettings) {
        this.renewalSettings = renewalSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudChannelV1CommitmentSettings withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}