package openapisdk.models.shared;


public enum PetsDogsAllowedExceptionEnum {
    EXCEPTION_UNSPECIFIED("EXCEPTION_UNSPECIFIED"),
    UNDER_CONSTRUCTION("UNDER_CONSTRUCTION"),
    DEPENDENT_ON_SEASON("DEPENDENT_ON_SEASON"),
    DEPENDENT_ON_DAY_OF_WEEK("DEPENDENT_ON_DAY_OF_WEEK");

    public final String value;

    private PetsDogsAllowedExceptionEnum(String value) {
        this.value = value;
    }
}
