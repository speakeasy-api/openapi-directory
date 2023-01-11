package openapisdk.models.shared;


public enum CapacityCommitmentPlanEnum {
    COMMITMENT_PLAN_UNSPECIFIED("COMMITMENT_PLAN_UNSPECIFIED"),
    FLEX("FLEX"),
    TRIAL("TRIAL"),
    MONTHLY("MONTHLY"),
    ANNUAL("ANNUAL");

    public final String value;

    private CapacityCommitmentPlanEnum(String value) {
        this.value = value;
    }
}
