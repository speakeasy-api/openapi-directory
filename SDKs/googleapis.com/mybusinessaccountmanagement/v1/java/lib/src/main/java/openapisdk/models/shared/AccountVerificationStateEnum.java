package openapisdk.models.shared;


public enum AccountVerificationStateEnum {
    VERIFICATION_STATE_UNSPECIFIED("VERIFICATION_STATE_UNSPECIFIED"),
    VERIFIED("VERIFIED"),
    UNVERIFIED("UNVERIFIED"),
    VERIFICATION_REQUESTED("VERIFICATION_REQUESTED");

    public final String value;

    private AccountVerificationStateEnum(String value) {
        this.value = value;
    }
}
