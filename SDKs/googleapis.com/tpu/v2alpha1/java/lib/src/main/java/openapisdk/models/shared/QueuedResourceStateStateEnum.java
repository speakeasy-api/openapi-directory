package openapisdk.models.shared;


public enum QueuedResourceStateStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACCEPTED("ACCEPTED"),
    PROVISIONING("PROVISIONING"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE"),
    SUSPENDING("SUSPENDING"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private QueuedResourceStateStateEnum(String value) {
        this.value = value;
    }
}
