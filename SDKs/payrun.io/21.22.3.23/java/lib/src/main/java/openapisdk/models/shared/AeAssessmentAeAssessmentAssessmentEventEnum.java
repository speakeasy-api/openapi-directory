package openapisdk.models.shared;


public enum AeAssessmentAeAssessmentAssessmentEventEnum {
    NON_ENROLMENT_EVENT("NonEnrolmentEvent"),
    AUTOMATIC_ENROLMENT("AutomaticEnrolment"),
    OPT_IN("OptIn"),
    VOLUNTARY_JOINER("VoluntaryJoiner"),
    CONTRACTUAL_ENROLMENT("ContractualEnrolment");

    public final String value;

    private AeAssessmentAeAssessmentAssessmentEventEnum(String value) {
        this.value = value;
    }
}
