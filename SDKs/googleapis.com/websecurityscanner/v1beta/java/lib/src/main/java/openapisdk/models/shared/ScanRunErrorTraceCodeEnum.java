package openapisdk.models.shared;


public enum ScanRunErrorTraceCodeEnum {
    CODE_UNSPECIFIED("CODE_UNSPECIFIED"),
    INTERNAL_ERROR("INTERNAL_ERROR"),
    SCAN_CONFIG_ISSUE("SCAN_CONFIG_ISSUE"),
    AUTHENTICATION_CONFIG_ISSUE("AUTHENTICATION_CONFIG_ISSUE"),
    TIMED_OUT_WHILE_SCANNING("TIMED_OUT_WHILE_SCANNING"),
    TOO_MANY_REDIRECTS("TOO_MANY_REDIRECTS"),
    TOO_MANY_HTTP_ERRORS("TOO_MANY_HTTP_ERRORS");

    public final String value;

    private ScanRunErrorTraceCodeEnum(String value) {
        this.value = value;
    }
}
