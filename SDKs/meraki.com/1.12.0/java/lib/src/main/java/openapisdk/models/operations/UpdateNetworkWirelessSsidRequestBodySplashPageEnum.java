package openapisdk.models.operations;


public enum UpdateNetworkWirelessSsidRequestBodySplashPageEnum {
    NONE("None"),
    CLICK_THROUGH_SPLASH_PAGE("Click-through splash page"),
    BILLING("Billing"),
    PASSWORD_PROTECTED_WITH_MERAKI_RADIUS("Password-protected with Meraki RADIUS"),
    PASSWORD_PROTECTED_WITH_CUSTOM_RADIUS("Password-protected with custom RADIUS"),
    PASSWORD_PROTECTED_WITH_ACTIVE_DIRECTORY("Password-protected with Active Directory"),
    PASSWORD_PROTECTED_WITH_LDAP("Password-protected with LDAP"),
    SMS_AUTHENTICATION("SMS authentication"),
    SYSTEMS_MANAGER_SENTRY("Systems Manager Sentry"),
    FACEBOOK_WI_FI("Facebook Wi-Fi"),
    GOOGLE_O_AUTH("Google OAuth"),
    SPONSORED_GUEST("Sponsored guest"),
    CISCO_ISE("Cisco ISE"),
    GOOGLE_APPS_DOMAIN("Google Apps domain");

    public final String value;

    private UpdateNetworkWirelessSsidRequestBodySplashPageEnum(String value) {
        this.value = value;
    }
}
