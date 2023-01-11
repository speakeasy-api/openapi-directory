package openapisdk.models.operations;


public enum UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum {
    PRIVATE_NETWORK("Private network"),
    PRIVATE_NETWORK_WITH_GUEST_ACCESS("Private network with guest access"),
    CHARGEABLE_PUBLIC_NETWORK("Chargeable public network"),
    FREE_PUBLIC_NETWORK("Free public network"),
    PERSONAL_DEVICE_NETWORK("Personal device network"),
    EMERGENCY_SERVICES_ONLY_NETWORK("Emergency services only network"),
    TEST_OR_EXPERIMENTAL("Test or experimental"),
    WILDCARD("Wildcard");

    public final String value;

    private UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum(String value) {
        this.value = value;
    }
}
