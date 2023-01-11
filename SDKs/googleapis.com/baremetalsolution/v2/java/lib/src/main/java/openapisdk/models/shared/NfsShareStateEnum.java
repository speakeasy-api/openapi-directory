package openapisdk.models.shared;


public enum NfsShareStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PROVISIONED("PROVISIONED"),
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING");

    public final String value;

    private NfsShareStateEnum(String value) {
        this.value = value;
    }
}
