package openapisdk.models.shared;


public enum AuthorizationAttemptInfoStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    AUTHORIZING("AUTHORIZING"),
    AUTHORIZED("AUTHORIZED"),
    FAILED("FAILED");

    public final String value;

    private AuthorizationAttemptInfoStateEnum(String value) {
        this.value = value;
    }
}
