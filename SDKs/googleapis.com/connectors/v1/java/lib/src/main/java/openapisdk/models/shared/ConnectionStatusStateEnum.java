package openapisdk.models.shared;


public enum ConnectionStatusStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DELETING("DELETING"),
    UPDATING("UPDATING"),
    ERROR("ERROR");

    public final String value;

    private ConnectionStatusStateEnum(String value) {
        this.value = value;
    }
}
