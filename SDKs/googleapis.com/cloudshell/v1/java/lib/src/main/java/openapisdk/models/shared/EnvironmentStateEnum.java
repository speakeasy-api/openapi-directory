package openapisdk.models.shared;


public enum EnvironmentStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    SUSPENDED("SUSPENDED"),
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    DELETING("DELETING");

    public final String value;

    private EnvironmentStateEnum(String value) {
        this.value = value;
    }
}
