package openapisdk.models.shared;


public enum EnvironmentStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    RUNNING("RUNNING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    ERROR("ERROR");

    public final String value;

    private EnvironmentStateEnum(String value) {
        this.value = value;
    }
}
