package openapisdk.models.shared;


public enum ScanRunWarningTraceCodeEnum {
    CODE_UNSPECIFIED("CODE_UNSPECIFIED"),
    INSUFFICIENT_CRAWL_RESULTS("INSUFFICIENT_CRAWL_RESULTS"),
    TOO_MANY_CRAWL_RESULTS("TOO_MANY_CRAWL_RESULTS"),
    TOO_MANY_FUZZ_TASKS("TOO_MANY_FUZZ_TASKS"),
    BLOCKED_BY_IAP("BLOCKED_BY_IAP"),
    NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN("NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN");

    public final String value;

    private ScanRunWarningTraceCodeEnum(String value) {
        this.value = value;
    }
}
