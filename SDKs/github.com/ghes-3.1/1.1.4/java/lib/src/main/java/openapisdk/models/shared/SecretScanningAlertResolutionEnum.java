package openapisdk.models.shared;


public enum SecretScanningAlertResolutionEnum {
    NULL_("null"),
    FALSE_POSITIVE("false_positive"),
    WONT_FIX("wont_fix"),
    REVOKED("revoked"),
    USED_IN_TESTS("used_in_tests");

    public final String value;

    private SecretScanningAlertResolutionEnum(String value) {
        this.value = value;
    }
}
