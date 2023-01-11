package openapisdk.models.shared;


public enum VerifyLocationRequestMethodEnum {
    VERIFICATION_METHOD_UNSPECIFIED("VERIFICATION_METHOD_UNSPECIFIED"),
    ADDRESS("ADDRESS"),
    EMAIL("EMAIL"),
    PHONE_CALL("PHONE_CALL"),
    SMS("SMS"),
    AUTO("AUTO");

    public final String value;

    private VerifyLocationRequestMethodEnum(String value) {
        this.value = value;
    }
}
