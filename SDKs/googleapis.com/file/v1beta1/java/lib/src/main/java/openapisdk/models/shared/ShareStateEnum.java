package openapisdk.models.shared;


public enum ShareStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING");

    public final String value;

    private ShareStateEnum(String value) {
        this.value = value;
    }
}
