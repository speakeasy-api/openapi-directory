package openapisdk.models.shared;


public enum UserResponseMfaTypeEnum {
    SMS("SMS"),
    YUBIKEY("YUBIKEY"),
    TOTP("TOTP");

    public final String value;

    private UserResponseMfaTypeEnum(String value) {
        this.value = value;
    }
}
