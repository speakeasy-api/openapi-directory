package openapisdk.models.shared;


public enum PrimaryStepRollUpEnum {
    UNSET("unset"),
    SUCCESS("success"),
    FAILURE("failure"),
    INCONCLUSIVE("inconclusive"),
    SKIPPED("skipped"),
    FLAKY("flaky");

    public final String value;

    private PrimaryStepRollUpEnum(String value) {
        this.value = value;
    }
}
