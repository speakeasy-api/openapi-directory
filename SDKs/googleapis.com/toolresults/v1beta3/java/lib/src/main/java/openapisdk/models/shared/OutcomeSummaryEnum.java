package openapisdk.models.shared;


public enum OutcomeSummaryEnum {
    UNSET("unset"),
    SUCCESS("success"),
    FAILURE("failure"),
    INCONCLUSIVE("inconclusive"),
    SKIPPED("skipped"),
    FLAKY("flaky");

    public final String value;

    private OutcomeSummaryEnum(String value) {
        this.value = value;
    }
}
