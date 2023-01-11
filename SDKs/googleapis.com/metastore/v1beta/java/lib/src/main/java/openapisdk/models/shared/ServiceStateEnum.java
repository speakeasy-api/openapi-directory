package openapisdk.models.shared;


public enum ServiceStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    SUSPENDING("SUSPENDING"),
    SUSPENDED("SUSPENDED"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    ERROR("ERROR");

    public final String value;

    private ServiceStateEnum(String value) {
        this.value = value;
    }
}
