package openapisdk.models.shared;


public enum AuthenticationTypeEnum {
    SMS_OTP("SMS_OTP"),
    CHIP_OTP("CHIP_OTP"),
    PHOTO_OTP("PHOTO_OTP"),
    PUSH_OTP("PUSH_OTP"),
    SMTP_OTP("SMTP_OTP");

    public final String value;

    private AuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
