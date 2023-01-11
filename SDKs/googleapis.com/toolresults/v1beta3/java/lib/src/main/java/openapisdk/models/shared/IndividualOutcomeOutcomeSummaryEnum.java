package openapisdk.models.shared;


public enum IndividualOutcomeOutcomeSummaryEnum {
    UNSET("unset"),
    SUCCESS("success"),
    FAILURE("failure"),
    INCONCLUSIVE("inconclusive"),
    SKIPPED("skipped"),
    FLAKY("flaky");

    public final String value;

    private IndividualOutcomeOutcomeSummaryEnum(String value) {
        this.value = value;
    }
}
