package openapisdk.models.shared;


public enum ServiceConfigVpcConnectorEgressSettingsEnum {
    VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED("VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"),
    PRIVATE_RANGES_ONLY("PRIVATE_RANGES_ONLY"),
    ALL_TRAFFIC("ALL_TRAFFIC");

    public final String value;

    private ServiceConfigVpcConnectorEgressSettingsEnum(String value) {
        this.value = value;
    }
}
