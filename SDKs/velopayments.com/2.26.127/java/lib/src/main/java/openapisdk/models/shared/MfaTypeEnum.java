package openapisdk.models.shared;


public enum MfaTypeEnum {
    SMS("SMS"),
    YUBIKEY("YUBIKEY"),
    TOTP("TOTP");

    public final String value;

    private MfaTypeEnum(String value) {
        this.value = value;
    }
}
