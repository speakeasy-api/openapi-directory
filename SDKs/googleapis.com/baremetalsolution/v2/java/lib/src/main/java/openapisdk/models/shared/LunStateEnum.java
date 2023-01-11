package openapisdk.models.shared;


public enum LunStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    READY("READY"),
    DELETING("DELETING");

    public final String value;

    private LunStateEnum(String value) {
        this.value = value;
    }
}
