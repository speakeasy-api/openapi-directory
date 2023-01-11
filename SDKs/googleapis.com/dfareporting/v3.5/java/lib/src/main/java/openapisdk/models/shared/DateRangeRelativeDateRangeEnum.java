package openapisdk.models.shared;


public enum DateRangeRelativeDateRangeEnum {
    TODAY("TODAY"),
    YESTERDAY("YESTERDAY"),
    WEEK_TO_DATE("WEEK_TO_DATE"),
    MONTH_TO_DATE("MONTH_TO_DATE"),
    QUARTER_TO_DATE("QUARTER_TO_DATE"),
    YEAR_TO_DATE("YEAR_TO_DATE"),
    PREVIOUS_WEEK("PREVIOUS_WEEK"),
    PREVIOUS_MONTH("PREVIOUS_MONTH"),
    PREVIOUS_QUARTER("PREVIOUS_QUARTER"),
    PREVIOUS_YEAR("PREVIOUS_YEAR"),
    LAST7_DAYS("LAST_7_DAYS"),
    LAST30_DAYS("LAST_30_DAYS"),
    LAST90_DAYS("LAST_90_DAYS"),
    LAST365_DAYS("LAST_365_DAYS"),
    LAST24_MONTHS("LAST_24_MONTHS"),
    LAST14_DAYS("LAST_14_DAYS"),
    LAST60_DAYS("LAST_60_DAYS");

    public final String value;

    private DateRangeRelativeDateRangeEnum(String value) {
        this.value = value;
    }
}
