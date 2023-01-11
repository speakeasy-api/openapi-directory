package openapisdk.models.shared;


public enum UnregisterMfaRequestMfaTypeEnum {
    YUBIKEY("YUBIKEY"),
    TOTP("TOTP");

    public final String value;

    private UnregisterMfaRequestMfaTypeEnum(String value) {
        this.value = value;
    }
}
