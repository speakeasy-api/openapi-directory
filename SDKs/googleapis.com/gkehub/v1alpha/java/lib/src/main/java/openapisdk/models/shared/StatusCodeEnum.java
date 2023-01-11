package openapisdk.models.shared;


public enum StatusCodeEnum {
    CODE_UNSPECIFIED("CODE_UNSPECIFIED"),
    OK("OK"),
    FAILED("FAILED"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private StatusCodeEnum(String value) {
        this.value = value;
    }
}
