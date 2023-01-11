package openapisdk.models.operations;


public enum GetNetworkWirelessClientConnectivityEventsTypesEnum {
    ASSOC("assoc"),
    DISASSOC("disassoc"),
    AUTH("auth"),
    DEAUTH("deauth"),
    DNS("dns"),
    DHCP("dhcp"),
    ROAM("roam"),
    CONNECTION("connection"),
    STICKY("sticky");

    public final String value;

    private GetNetworkWirelessClientConnectivityEventsTypesEnum(String value) {
        this.value = value;
    }
}
