package openapisdk.models.shared;


public enum FederationStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    ERROR("ERROR");

    public final String value;

    private FederationStateEnum(String value) {
        this.value = value;
    }
}
