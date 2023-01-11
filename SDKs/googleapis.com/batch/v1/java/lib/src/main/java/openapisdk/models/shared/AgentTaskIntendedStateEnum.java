package openapisdk.models.shared;


public enum AgentTaskIntendedStateEnum {
    INTENDED_STATE_UNSPECIFIED("INTENDED_STATE_UNSPECIFIED"),
    ASSIGNED("ASSIGNED"),
    CANCELLED("CANCELLED"),
    DELETED("DELETED");

    public final String value;

    private AgentTaskIntendedStateEnum(String value) {
        this.value = value;
    }
}
