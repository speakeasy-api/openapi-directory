package openapisdk.models.shared;


public enum ConnectionProfileStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    DRAFT("DRAFT"),
    CREATING("CREATING"),
    READY("READY"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    DELETED("DELETED"),
    FAILED("FAILED");

    public final String value;

    private ConnectionProfileStateEnum(String value) {
        this.value = value;
    }
}
