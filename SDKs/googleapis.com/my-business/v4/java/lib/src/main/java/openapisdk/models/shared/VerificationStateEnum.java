package openapisdk.models.shared;


public enum VerificationStateEnum {
    VERIFICATION_STATE_UNSPECIFIED("VERIFICATION_STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED");

    public final String value;

    private VerificationStateEnum(String value) {
        this.value = value;
    }
}
