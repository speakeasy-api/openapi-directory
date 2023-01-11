package openapisdk.models.shared;


public enum EmployeeEmployeeAeAssessmentOverrideEnum {
    NONE("None"),
    OPT_OUT("OptOut"),
    OPT_IN("OptIn"),
    VOLUNTARY_JOINER("VoluntaryJoiner"),
    CONTRACTUAL_PENSION("ContractualPension"),
    CEASED_MEMBERSHIP("CeasedMembership"),
    LEAVER("Leaver"),
    EXCLUDED("Excluded");

    public final String value;

    private EmployeeEmployeeAeAssessmentOverrideEnum(String value) {
        this.value = value;
    }
}
