package openapisdk.models.shared;


public enum InstanceStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    REPAIRING("REPAIRING"),
    MAINTENANCE("MAINTENANCE"),
    IMPORTING("IMPORTING"),
    FAILING_OVER("FAILING_OVER");

    public final String value;

    private InstanceStateEnum(String value) {
        this.value = value;
    }
}
