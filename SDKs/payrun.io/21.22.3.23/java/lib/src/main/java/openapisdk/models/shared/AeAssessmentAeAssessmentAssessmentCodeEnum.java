package openapisdk.models.shared;


public enum AeAssessmentAeAssessmentAssessmentCodeEnum {
    EXCLUDED("Excluded"),
    ELIGIBLE_JOB_HOLDER("EligibleJobHolder"),
    NON_ELIGIBLE_JOB_HOLDER("NonEligibleJobHolder"),
    ENTITLED_WORKER("EntitledWorker");

    public final String value;

    private AeAssessmentAeAssessmentAssessmentCodeEnum(String value) {
        this.value = value;
    }
}
