package openapisdk.models.shared;


public enum RuntimeHealthStateEnum {
    HEALTH_STATE_UNSPECIFIED("HEALTH_STATE_UNSPECIFIED"),
    HEALTHY("HEALTHY"),
    UNHEALTHY("UNHEALTHY"),
    AGENT_NOT_INSTALLED("AGENT_NOT_INSTALLED"),
    AGENT_NOT_RUNNING("AGENT_NOT_RUNNING");

    public final String value;

    private RuntimeHealthStateEnum(String value) {
        this.value = value;
    }
}
