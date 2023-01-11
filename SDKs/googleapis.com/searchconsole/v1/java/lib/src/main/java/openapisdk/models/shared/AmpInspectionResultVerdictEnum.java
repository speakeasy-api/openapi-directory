package openapisdk.models.shared;


public enum AmpInspectionResultVerdictEnum {
    VERDICT_UNSPECIFIED("VERDICT_UNSPECIFIED"),
    PASS("PASS"),
    PARTIAL("PARTIAL"),
    FAIL("FAIL"),
    NEUTRAL("NEUTRAL");

    public final String value;

    private AmpInspectionResultVerdictEnum(String value) {
        this.value = value;
    }
}
