package openapisdk.models.shared;


public enum TestMatrixOutcomeSummaryEnum {
    OUTCOME_SUMMARY_UNSPECIFIED("OUTCOME_SUMMARY_UNSPECIFIED"),
    SUCCESS("SUCCESS"),
    FAILURE("FAILURE"),
    INCONCLUSIVE("INCONCLUSIVE"),
    SKIPPED("SKIPPED");

    public final String value;

    private TestMatrixOutcomeSummaryEnum(String value) {
        this.value = value;
    }
}
