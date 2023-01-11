package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship
 * Details associated with guest sponsored splash.
**/
public class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInMinutes")
    public Long durationInMinutes;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship withDurationInMinutes(Long durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestCanRequestTimeframe")
    public Boolean guestCanRequestTimeframe;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship withGuestCanRequestTimeframe(Boolean guestCanRequestTimeframe) {
        this.guestCanRequestTimeframe = guestCanRequestTimeframe;
        return this;
    }
}