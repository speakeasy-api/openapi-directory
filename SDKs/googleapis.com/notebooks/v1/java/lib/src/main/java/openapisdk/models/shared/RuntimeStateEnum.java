package openapisdk.models.shared;


public enum RuntimeStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    STARTING("STARTING"),
    PROVISIONING("PROVISIONING"),
    ACTIVE("ACTIVE"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    DELETING("DELETING"),
    UPGRADING("UPGRADING"),
    INITIALIZING("INITIALIZING");

    public final String value;

    private RuntimeStateEnum(String value) {
        this.value = value;
    }
}
