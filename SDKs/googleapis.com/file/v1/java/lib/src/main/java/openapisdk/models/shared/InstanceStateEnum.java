package openapisdk.models.shared;


public enum InstanceStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    REPAIRING("REPAIRING"),
    DELETING("DELETING"),
    ERROR("ERROR"),
    RESTORING("RESTORING"),
    SUSPENDED("SUSPENDED"),
    SUSPENDING("SUSPENDING"),
    RESUMING("RESUMING");

    public final String value;

    private InstanceStateEnum(String value) {
        this.value = value;
    }
}
