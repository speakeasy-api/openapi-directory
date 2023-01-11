package openapisdk.models.shared;


public enum VerificationStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED");

    public final String value;

    private VerificationStateEnum(String value) {
        this.value = value;
    }
}
