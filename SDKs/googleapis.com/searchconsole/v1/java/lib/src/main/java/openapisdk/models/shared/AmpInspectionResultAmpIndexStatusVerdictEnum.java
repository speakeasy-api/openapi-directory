package openapisdk.models.shared;


public enum AmpInspectionResultAmpIndexStatusVerdictEnum {
    VERDICT_UNSPECIFIED("VERDICT_UNSPECIFIED"),
    PASS("PASS"),
    PARTIAL("PARTIAL"),
    FAIL("FAIL"),
    NEUTRAL("NEUTRAL");

    public final String value;

    private AmpInspectionResultAmpIndexStatusVerdictEnum(String value) {
        this.value = value;
    }
}
