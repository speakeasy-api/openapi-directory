package openapisdk.models.operations;


public enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    GOOGLE_PUBLIC_DNS("googlePublicDns"),
    OPEN_DNS("openDns"),
    CUSTOM("custom");

    public final String value;

    private UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum(String value) {
        this.value = value;
    }
}
