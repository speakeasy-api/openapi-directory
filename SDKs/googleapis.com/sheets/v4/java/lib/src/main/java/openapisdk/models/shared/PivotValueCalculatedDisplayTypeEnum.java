package openapisdk.models.shared;


public enum PivotValueCalculatedDisplayTypeEnum {
    PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED("PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED"),
    PERCENT_OF_ROW_TOTAL("PERCENT_OF_ROW_TOTAL"),
    PERCENT_OF_COLUMN_TOTAL("PERCENT_OF_COLUMN_TOTAL"),
    PERCENT_OF_GRAND_TOTAL("PERCENT_OF_GRAND_TOTAL");

    public final String value;

    private PivotValueCalculatedDisplayTypeEnum(String value) {
        this.value = value;
    }
}
