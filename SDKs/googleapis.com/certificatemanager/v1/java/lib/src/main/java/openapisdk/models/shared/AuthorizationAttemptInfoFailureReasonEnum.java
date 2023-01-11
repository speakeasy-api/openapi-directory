package openapisdk.models.shared;


public enum AuthorizationAttemptInfoFailureReasonEnum {
    FAILURE_REASON_UNSPECIFIED("FAILURE_REASON_UNSPECIFIED"),
    CONFIG("CONFIG"),
    CAA("CAA"),
    RATE_LIMITED("RATE_LIMITED");

    public final String value;

    private AuthorizationAttemptInfoFailureReasonEnum(String value) {
        this.value = value;
    }
}
