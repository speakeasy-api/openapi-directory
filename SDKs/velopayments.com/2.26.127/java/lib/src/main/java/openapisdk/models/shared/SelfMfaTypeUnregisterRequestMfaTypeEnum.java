package openapisdk.models.shared;


public enum SelfMfaTypeUnregisterRequestMfaTypeEnum {
    SMS("SMS"),
    YUBIKEY("YUBIKEY"),
    TOTP("TOTP");

    public final String value;

    private SelfMfaTypeUnregisterRequestMfaTypeEnum(String value) {
        this.value = value;
    }
}
