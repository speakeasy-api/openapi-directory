package openapisdk.models.shared;


public enum MobileUsabilityInspectionResultVerdictEnum {
    VERDICT_UNSPECIFIED("VERDICT_UNSPECIFIED"),
    PASS("PASS"),
    PARTIAL("PARTIAL"),
    FAIL("FAIL"),
    NEUTRAL("NEUTRAL");

    public final String value;

    private MobileUsabilityInspectionResultVerdictEnum(String value) {
        this.value = value;
    }
}
