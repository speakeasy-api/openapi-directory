package openapisdk.models.shared;


public enum NetworkConfigServiceCidrEnum {
    SERVICE_CIDR_UNSPECIFIED("SERVICE_CIDR_UNSPECIFIED"),
    DISABLED("DISABLED"),
    HIGH26("HIGH_26"),
    HIGH27("HIGH_27"),
    HIGH28("HIGH_28");

    public final String value;

    private NetworkConfigServiceCidrEnum(String value) {
        this.value = value;
    }
}
