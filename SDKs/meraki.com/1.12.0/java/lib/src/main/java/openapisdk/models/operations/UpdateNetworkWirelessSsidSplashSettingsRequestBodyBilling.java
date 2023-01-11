package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling
 * Details associated with billing splash.
**/
public class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeAccess")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess freeAccess;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling withFreeAccess(UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess freeAccess) {
        this.freeAccess = freeAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prepaidAccessFastLoginEnabled")
    public Boolean prepaidAccessFastLoginEnabled;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling withPrepaidAccessFastLoginEnabled(Boolean prepaidAccessFastLoginEnabled) {
        this.prepaidAccessFastLoginEnabled = prepaidAccessFastLoginEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmailAddress")
    public String replyToEmailAddress;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling withReplyToEmailAddress(String replyToEmailAddress) {
        this.replyToEmailAddress = replyToEmailAddress;
        return this;
    }
}