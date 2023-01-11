package openapisdk.models.shared;


public enum IndexStatusInspectionResultVerdictEnum {
    VERDICT_UNSPECIFIED("VERDICT_UNSPECIFIED"),
    PASS("PASS"),
    PARTIAL("PARTIAL"),
    FAIL("FAIL"),
    NEUTRAL("NEUTRAL");

    public final String value;

    private IndexStatusInspectionResultVerdictEnum(String value) {
        this.value = value;
    }
}
