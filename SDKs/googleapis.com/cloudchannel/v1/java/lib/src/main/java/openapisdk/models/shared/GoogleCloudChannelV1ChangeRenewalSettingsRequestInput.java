package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ChangeRenewalSettingsRequestInput
 * Request message for CloudChannelService.ChangeRenewalSettings.
**/
public class GoogleCloudChannelV1ChangeRenewalSettingsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSettings")
    public GoogleCloudChannelV1RenewalSettingsInput renewalSettings;
    public GoogleCloudChannelV1ChangeRenewalSettingsRequestInput withRenewalSettings(GoogleCloudChannelV1RenewalSettingsInput renewalSettings) {
        this.renewalSettings = renewalSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1ChangeRenewalSettingsRequestInput withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}