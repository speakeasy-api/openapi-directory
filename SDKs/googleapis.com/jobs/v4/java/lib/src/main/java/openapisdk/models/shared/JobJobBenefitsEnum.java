package openapisdk.models.shared;


public enum JobJobBenefitsEnum {
    JOB_BENEFIT_UNSPECIFIED("JOB_BENEFIT_UNSPECIFIED"),
    CHILD_CARE("CHILD_CARE"),
    DENTAL("DENTAL"),
    DOMESTIC_PARTNER("DOMESTIC_PARTNER"),
    FLEXIBLE_HOURS("FLEXIBLE_HOURS"),
    MEDICAL("MEDICAL"),
    LIFE_INSURANCE("LIFE_INSURANCE"),
    PARENTAL_LEAVE("PARENTAL_LEAVE"),
    RETIREMENT_PLAN("RETIREMENT_PLAN"),
    SICK_DAYS("SICK_DAYS"),
    VACATION("VACATION"),
    VISION("VISION");

    public final String value;

    private JobJobBenefitsEnum(String value) {
        this.value = value;
    }
}
