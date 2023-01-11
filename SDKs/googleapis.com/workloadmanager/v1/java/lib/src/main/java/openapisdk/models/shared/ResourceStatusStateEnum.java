package openapisdk.models.shared;


public enum ResourceStatusStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING");

    public final String value;

    private ResourceStatusStateEnum(String value) {
        this.value = value;
    }
}
