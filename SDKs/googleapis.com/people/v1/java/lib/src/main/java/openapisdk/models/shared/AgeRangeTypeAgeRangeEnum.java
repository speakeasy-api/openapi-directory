package openapisdk.models.shared;


public enum AgeRangeTypeAgeRangeEnum {
    AGE_RANGE_UNSPECIFIED("AGE_RANGE_UNSPECIFIED"),
    LESS_THAN_EIGHTEEN("LESS_THAN_EIGHTEEN"),
    EIGHTEEN_TO_TWENTY("EIGHTEEN_TO_TWENTY"),
    TWENTY_ONE_OR_OLDER("TWENTY_ONE_OR_OLDER");

    public final String value;

    private AgeRangeTypeAgeRangeEnum(String value) {
        this.value = value;
    }
}
