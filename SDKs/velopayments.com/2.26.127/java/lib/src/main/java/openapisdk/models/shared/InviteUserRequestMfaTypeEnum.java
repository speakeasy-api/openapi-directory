package openapisdk.models.shared;


public enum InviteUserRequestMfaTypeEnum {
    SMS("SMS"),
    YUBIKEY("YUBIKEY"),
    TOTP("TOTP");

    public final String value;

    private InviteUserRequestMfaTypeEnum(String value) {
        this.value = value;
    }
}
