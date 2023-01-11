package openapisdk.models.shared;


public enum CustomBiddingScriptStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACCEPTED("ACCEPTED"),
    REJECTED("REJECTED"),
    PENDING("PENDING");

    public final String value;

    private CustomBiddingScriptStateEnum(String value) {
        this.value = value;
    }
}
