package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidSplashSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSimultaneousLogins")
    public Boolean allowSimultaneousLogins;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withAllowSimultaneousLogins(Boolean allowSimultaneousLogins) {
        this.allowSimultaneousLogins = allowSimultaneousLogins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling billing;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withBilling(UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockAllTrafficBeforeSignOn")
    public Boolean blockAllTrafficBeforeSignOn;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withBlockAllTrafficBeforeSignOn(Boolean blockAllTrafficBeforeSignOn) {
        this.blockAllTrafficBeforeSignOn = blockAllTrafficBeforeSignOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controllerDisconnectionBehavior")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum controllerDisconnectionBehavior;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withControllerDisconnectionBehavior(UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum controllerDisconnectionBehavior) {
        this.controllerDisconnectionBehavior = controllerDisconnectionBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestSponsorship")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship guestSponsorship;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withGuestSponsorship(UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship guestSponsorship) {
        this.guestSponsorship = guestSponsorship;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUrl")
    public String redirectUrl;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentryEnrollment")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment sentryEnrollment;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withSentryEnrollment(UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment sentryEnrollment) {
        this.sentryEnrollment = sentryEnrollment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashImage")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage splashImage;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withSplashImage(UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage splashImage) {
        this.splashImage = splashImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashLogo")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo splashLogo;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withSplashLogo(UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo splashLogo) {
        this.splashLogo = splashLogo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashPrepaidFront")
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront splashPrepaidFront;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withSplashPrepaidFront(UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront splashPrepaidFront) {
        this.splashPrepaidFront = splashPrepaidFront;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashTimeout")
    public Long splashTimeout;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withSplashTimeout(Long splashTimeout) {
        this.splashTimeout = splashTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashUrl")
    public String splashUrl;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withSplashUrl(String splashUrl) {
        this.splashUrl = splashUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useRedirectUrl")
    public Boolean useRedirectUrl;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withUseRedirectUrl(Boolean useRedirectUrl) {
        this.useRedirectUrl = useRedirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useSplashUrl")
    public Boolean useSplashUrl;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withUseSplashUrl(Boolean useSplashUrl) {
        this.useSplashUrl = useSplashUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcomeMessage")
    public String welcomeMessage;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBody withWelcomeMessage(String welcomeMessage) {
        this.welcomeMessage = welcomeMessage;
        return this;
    }
}