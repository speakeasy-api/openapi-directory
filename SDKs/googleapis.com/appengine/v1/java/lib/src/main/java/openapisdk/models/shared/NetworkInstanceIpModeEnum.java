package openapisdk.models.shared;


public enum NetworkInstanceIpModeEnum {
    INSTANCE_IP_MODE_UNSPECIFIED("INSTANCE_IP_MODE_UNSPECIFIED"),
    EXTERNAL("EXTERNAL"),
    INTERNAL("INTERNAL");

    public final String value;

    private NetworkInstanceIpModeEnum(String value) {
        this.value = value;
    }
}
