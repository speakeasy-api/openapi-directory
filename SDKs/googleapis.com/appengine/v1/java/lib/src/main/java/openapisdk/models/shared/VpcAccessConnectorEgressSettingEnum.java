package openapisdk.models.shared;


public enum VpcAccessConnectorEgressSettingEnum {
    EGRESS_SETTING_UNSPECIFIED("EGRESS_SETTING_UNSPECIFIED"),
    ALL_TRAFFIC("ALL_TRAFFIC"),
    PRIVATE_IP_RANGES("PRIVATE_IP_RANGES");

    public final String value;

    private VpcAccessConnectorEgressSettingEnum(String value) {
        this.value = value;
    }
}
