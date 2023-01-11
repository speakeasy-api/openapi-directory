package openapisdk.models.operations;


public enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum {
    WAN1("wan1"),
    WAN2("wan2"),
    BEST_FOR_VO_IP("bestForVoIP"),
    LOAD_BALANCING("loadBalancing"),
    DEFAULT_UPLINK("defaultUplink");

    public final String value;

    private UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum(String value) {
        this.value = value;
    }
}
