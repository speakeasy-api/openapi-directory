package openapisdk.models.shared;


public enum AccountStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    READY("READY"),
    NEEDS_ATTENTION("NEEDS_ATTENTION"),
    CLOSED("CLOSED");

    public final String value;

    private AccountStateEnum(String value) {
        this.value = value;
    }
}
