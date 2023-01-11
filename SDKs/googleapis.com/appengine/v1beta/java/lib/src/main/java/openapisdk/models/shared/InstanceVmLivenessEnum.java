package openapisdk.models.shared;


public enum InstanceVmLivenessEnum {
    LIVENESS_STATE_UNSPECIFIED("LIVENESS_STATE_UNSPECIFIED"),
    UNKNOWN("UNKNOWN"),
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY"),
    DRAINING("DRAINING"),
    TIMEOUT("TIMEOUT");

    public final String value;

    private InstanceVmLivenessEnum(String value) {
        this.value = value;
    }
}
