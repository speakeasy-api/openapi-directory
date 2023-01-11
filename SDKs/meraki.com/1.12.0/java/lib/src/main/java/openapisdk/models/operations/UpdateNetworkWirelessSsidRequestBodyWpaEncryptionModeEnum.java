package openapisdk.models.operations;


public enum UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum {
    WPA1_ONLY("WPA1 only"),
    WPA1_AND_WPA2("WPA1 and WPA2"),
    WPA2_ONLY("WPA2 only"),
    WPA3_TRANSITION_MODE("WPA3 Transition Mode"),
    WPA3_ONLY("WPA3 only");

    public final String value;

    private UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum(String value) {
        this.value = value;
    }
}
