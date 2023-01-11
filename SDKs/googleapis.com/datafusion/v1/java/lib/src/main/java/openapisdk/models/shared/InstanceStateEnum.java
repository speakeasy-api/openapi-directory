package openapisdk.models.shared;


public enum InstanceStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DELETING("DELETING"),
    UPGRADING("UPGRADING"),
    RESTARTING("RESTARTING"),
    UPDATING("UPDATING"),
    AUTO_UPDATING("AUTO_UPDATING"),
    AUTO_UPGRADING("AUTO_UPGRADING"),
    DISABLED("DISABLED");

    public final String value;

    private InstanceStateEnum(String value) {
        this.value = value;
    }
}
