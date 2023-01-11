package openapisdk.models.shared;


public enum AccountStateStatusEnum {
    ACCOUNT_STATUS_UNSPECIFIED("ACCOUNT_STATUS_UNSPECIFIED"),
    VERIFIED("VERIFIED"),
    UNVERIFIED("UNVERIFIED"),
    VERIFICATION_REQUESTED("VERIFICATION_REQUESTED");

    public final String value;

    private AccountStateStatusEnum(String value) {
        this.value = value;
    }
}
