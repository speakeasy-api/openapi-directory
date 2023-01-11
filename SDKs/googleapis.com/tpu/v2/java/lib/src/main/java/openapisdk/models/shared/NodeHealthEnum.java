package openapisdk.models.shared;


public enum NodeHealthEnum {
    HEALTH_UNSPECIFIED("HEALTH_UNSPECIFIED"),
    HEALTHY("HEALTHY"),
    TIMEOUT("TIMEOUT"),
    UNHEALTHY_TENSORFLOW("UNHEALTHY_TENSORFLOW"),
    UNHEALTHY_MAINTENANCE("UNHEALTHY_MAINTENANCE");

    public final String value;

    private NodeHealthEnum(String value) {
        this.value = value;
    }
}
