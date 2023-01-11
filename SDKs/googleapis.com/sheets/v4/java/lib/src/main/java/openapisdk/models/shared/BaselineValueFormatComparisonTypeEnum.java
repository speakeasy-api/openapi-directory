package openapisdk.models.shared;


public enum BaselineValueFormatComparisonTypeEnum {
    COMPARISON_TYPE_UNDEFINED("COMPARISON_TYPE_UNDEFINED"),
    ABSOLUTE_DIFFERENCE("ABSOLUTE_DIFFERENCE"),
    PERCENTAGE_DIFFERENCE("PERCENTAGE_DIFFERENCE");

    public final String value;

    private BaselineValueFormatComparisonTypeEnum(String value) {
        this.value = value;
    }
}
