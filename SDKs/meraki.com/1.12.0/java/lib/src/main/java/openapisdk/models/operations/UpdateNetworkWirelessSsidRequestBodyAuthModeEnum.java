package openapisdk.models.operations;


public enum UpdateNetworkWirelessSsidRequestBodyAuthModeEnum {
    OPEN("open"),
    PSK("psk"),
    OPEN_WITH_RADIUS("open-with-radius"),
    EIGHT_THOUSAND_AND_TWENTY_ONEX_MERAKI("8021x-meraki"),
    EIGHT_THOUSAND_AND_TWENTY_ONEX_RADIUS("8021x-radius"),
    EIGHT_THOUSAND_AND_TWENTY_ONEX_GOOGLE("8021x-google"),
    EIGHT_THOUSAND_AND_TWENTY_ONEX_LOCALRADIUS("8021x-localradius"),
    IPSK_WITH_RADIUS("ipsk-with-radius"),
    IPSK_WITHOUT_RADIUS("ipsk-without-radius");

    public final String value;

    private UpdateNetworkWirelessSsidRequestBodyAuthModeEnum(String value) {
        this.value = value;
    }
}
