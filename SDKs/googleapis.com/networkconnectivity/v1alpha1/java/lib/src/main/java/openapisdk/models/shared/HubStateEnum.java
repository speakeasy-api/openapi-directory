package openapisdk.models.shared;


public enum HubStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    UPDATING("UPDATING");

    public final String value;

    private HubStateEnum(String value) {
        this.value = value;
    }
}
