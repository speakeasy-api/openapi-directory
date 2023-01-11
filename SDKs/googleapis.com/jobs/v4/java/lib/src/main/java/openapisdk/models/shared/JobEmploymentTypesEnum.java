package openapisdk.models.shared;


public enum JobEmploymentTypesEnum {
    EMPLOYMENT_TYPE_UNSPECIFIED("EMPLOYMENT_TYPE_UNSPECIFIED"),
    FULL_TIME("FULL_TIME"),
    PART_TIME("PART_TIME"),
    CONTRACTOR("CONTRACTOR"),
    CONTRACT_TO_HIRE("CONTRACT_TO_HIRE"),
    TEMPORARY("TEMPORARY"),
    INTERN("INTERN"),
    VOLUNTEER("VOLUNTEER"),
    PER_DIEM("PER_DIEM"),
    FLY_IN_FLY_OUT("FLY_IN_FLY_OUT"),
    OTHER_EMPLOYMENT_TYPE("OTHER_EMPLOYMENT_TYPE");

    public final String value;

    private JobEmploymentTypesEnum(String value) {
        this.value = value;
    }
}
