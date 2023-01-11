package openapisdk.models.shared;


public enum InstanceStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    PERFORMING_MAINTENANCE("PERFORMING_MAINTENANCE");

    public final String value;

    private InstanceStateEnum(String value) {
        this.value = value;
    }
}
