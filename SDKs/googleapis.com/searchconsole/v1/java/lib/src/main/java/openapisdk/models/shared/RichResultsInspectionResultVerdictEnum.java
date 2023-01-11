package openapisdk.models.shared;


public enum RichResultsInspectionResultVerdictEnum {
    VERDICT_UNSPECIFIED("VERDICT_UNSPECIFIED"),
    PASS("PASS"),
    PARTIAL("PARTIAL"),
    FAIL("FAIL"),
    NEUTRAL("NEUTRAL");

    public final String value;

    private RichResultsInspectionResultVerdictEnum(String value) {
        this.value = value;
    }
}
