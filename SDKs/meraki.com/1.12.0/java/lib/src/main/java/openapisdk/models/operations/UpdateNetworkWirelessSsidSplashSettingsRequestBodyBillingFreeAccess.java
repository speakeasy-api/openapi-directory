package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess
 * Details associated with a free access plan with limits.
**/
public class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInMinutes")
    public Long durationInMinutes;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess withDurationInMinutes(Long durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}