package openapisdk.models.shared;


public enum NetworkConfigBandwidthEnum {
    BANDWIDTH_UNSPECIFIED("BANDWIDTH_UNSPECIFIED"),
    BW1_GBPS("BW_1_GBPS"),
    BW2_GBPS("BW_2_GBPS"),
    BW5_GBPS("BW_5_GBPS"),
    BW10_GBPS("BW_10_GBPS");

    public final String value;

    private NetworkConfigBandwidthEnum(String value) {
        this.value = value;
    }
}
