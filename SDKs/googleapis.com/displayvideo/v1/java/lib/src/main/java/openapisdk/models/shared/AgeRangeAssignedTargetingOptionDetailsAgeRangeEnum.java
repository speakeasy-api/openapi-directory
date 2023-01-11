package openapisdk.models.shared;


public enum AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum {
    AGE_RANGE_UNSPECIFIED("AGE_RANGE_UNSPECIFIED"),
    AGE_RANGE1824("AGE_RANGE_18_24"),
    AGE_RANGE2534("AGE_RANGE_25_34"),
    AGE_RANGE3544("AGE_RANGE_35_44"),
    AGE_RANGE4554("AGE_RANGE_45_54"),
    AGE_RANGE5564("AGE_RANGE_55_64"),
    AGE_RANGE65_PLUS("AGE_RANGE_65_PLUS"),
    AGE_RANGE_UNKNOWN("AGE_RANGE_UNKNOWN");

    public final String value;

    private AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum(String value) {
        this.value = value;
    }
}
