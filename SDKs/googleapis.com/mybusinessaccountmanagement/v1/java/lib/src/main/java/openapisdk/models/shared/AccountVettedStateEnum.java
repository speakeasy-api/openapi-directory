package openapisdk.models.shared;


public enum AccountVettedStateEnum {
    VETTED_STATE_UNSPECIFIED("VETTED_STATE_UNSPECIFIED"),
    NOT_VETTED("NOT_VETTED"),
    VETTED("VETTED"),
    INVALID("INVALID");

    public final String value;

    private AccountVettedStateEnum(String value) {
        this.value = value;
    }
}
