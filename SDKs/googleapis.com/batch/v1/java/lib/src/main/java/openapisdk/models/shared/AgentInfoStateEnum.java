package openapisdk.models.shared;


public enum AgentInfoStateEnum {
    AGENT_STATE_UNSPECIFIED("AGENT_STATE_UNSPECIFIED"),
    AGENT_STARTING("AGENT_STARTING"),
    AGENT_RUNNING("AGENT_RUNNING"),
    AGENT_STOPPED("AGENT_STOPPED");

    public final String value;

    private AgentInfoStateEnum(String value) {
        this.value = value;
    }
}
