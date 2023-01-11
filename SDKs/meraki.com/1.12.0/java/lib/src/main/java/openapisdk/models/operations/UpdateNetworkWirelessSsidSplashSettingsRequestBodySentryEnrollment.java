package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment
 * Systems Manager sentry enrollment splash settings.
**/
public class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcedSystems")
    public String[] enforcedSystems;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment withEnforcedSystems(String[] enforcedSystems) {
        this.enforcedSystems = enforcedSystems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strength")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum strength;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment withStrength(UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum strength) {
        this.strength = strength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemsManagerNetwork")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork systemsManagerNetwork;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment withSystemsManagerNetwork(UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork systemsManagerNetwork) {
        this.systemsManagerNetwork = systemsManagerNetwork;
        return this;
    }
}