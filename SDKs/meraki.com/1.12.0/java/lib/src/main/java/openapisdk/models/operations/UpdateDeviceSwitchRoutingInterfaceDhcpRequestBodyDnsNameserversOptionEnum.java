package openapisdk.models.operations;


public enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GOOGLE_PUBLIC_DNS("googlePublicDns"),
    OPEN_DNS("openDns"),
    CUSTOM("custom");

    public final String value;

    private UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum(String value) {
        this.value = value;
    }
}
