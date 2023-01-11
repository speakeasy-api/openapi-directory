package openapisdk.models.shared;


public enum CapacityCommitmentRenewalPlanEnum {
    COMMITMENT_PLAN_UNSPECIFIED("COMMITMENT_PLAN_UNSPECIFIED"),
    FLEX("FLEX"),
    TRIAL("TRIAL"),
    MONTHLY("MONTHLY"),
    ANNUAL("ANNUAL");

    public final String value;

    private CapacityCommitmentRenewalPlanEnum(String value) {
        this.value = value;
    }
}
