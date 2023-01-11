package openapisdk.models.shared;


public enum AuthenticationModeEnum {
    MOBILE_OTP("MOBILE_OTP"),
    DIRECT("DIRECT"),
    DEMOGRAPHICS("DEMOGRAPHICS"),
    AADHAAR_OTP("AADHAAR_OTP");

    public final String value;

    private AuthenticationModeEnum(String value) {
        this.value = value;
    }
}
