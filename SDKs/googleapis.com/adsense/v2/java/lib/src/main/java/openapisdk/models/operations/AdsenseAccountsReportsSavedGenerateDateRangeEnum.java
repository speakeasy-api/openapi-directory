package openapisdk.models.operations;


public enum AdsenseAccountsReportsSavedGenerateDateRangeEnum {
    REPORTING_DATE_RANGE_UNSPECIFIED("REPORTING_DATE_RANGE_UNSPECIFIED"),
    CUSTOM("CUSTOM"),
    TODAY("TODAY"),
    YESTERDAY("YESTERDAY"),
    MONTH_TO_DATE("MONTH_TO_DATE"),
    YEAR_TO_DATE("YEAR_TO_DATE"),
    LAST7_DAYS("LAST_7_DAYS"),
    LAST30_DAYS("LAST_30_DAYS");

    public final String value;

    private AdsenseAccountsReportsSavedGenerateDateRangeEnum(String value) {
        this.value = value;
    }
}
