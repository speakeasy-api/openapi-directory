package openapisdk.models.shared;


public enum InstanceStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    STARTING("STARTING"),
    PROVISIONING("PROVISIONING"),
    ACTIVE("ACTIVE"),
    STOPPING("STOPPING"),
    STOPPED("STOPPED"),
    DELETED("DELETED"),
    UPGRADING("UPGRADING"),
    INITIALIZING("INITIALIZING"),
    REGISTERING("REGISTERING"),
    SUSPENDING("SUSPENDING"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private InstanceStateEnum(String value) {
        this.value = value;
    }
}
