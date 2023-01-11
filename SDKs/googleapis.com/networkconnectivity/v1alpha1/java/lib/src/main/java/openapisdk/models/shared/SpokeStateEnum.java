package openapisdk.models.shared;


public enum SpokeStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private SpokeStateEnum(String value) {
        this.value = value;
    }
}
