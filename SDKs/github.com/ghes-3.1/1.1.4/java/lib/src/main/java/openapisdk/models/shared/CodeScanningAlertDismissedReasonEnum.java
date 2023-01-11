package openapisdk.models.shared;


public enum CodeScanningAlertDismissedReasonEnum {
    UNKNOWN(""),
    FALSE_POSITIVE("false positive"),
    WON_T_FIX("won't fix"),
    USED_IN_TESTS("used in tests");

    public final String value;

    private CodeScanningAlertDismissedReasonEnum(String value) {
        this.value = value;
    }
}
