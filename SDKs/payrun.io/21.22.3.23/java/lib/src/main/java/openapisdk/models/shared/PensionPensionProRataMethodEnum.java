package openapisdk.models.shared;


public enum PensionPensionProRataMethodEnum {
    NOT_SET("NotSet"),
    ANNUAL260_DAYS("Annual260Days"),
    ANNUAL365_DAYS("Annual365Days"),
    ANNUAL_QUALIFYING_DAYS("AnnualQualifyingDays"),
    DAYS_PER_CALENDAR_MONTH("DaysPerCalendarMonth"),
    DAYS_PER_TAX_PERIOD("DaysPerTaxPeriod"),
    WORKING_DAYS_PER_CALENDAR_MONTH("WorkingDaysPerCalendarMonth"),
    WEEK_DAYS_PER_CALENDAR_MONTH("WeekDaysPerCalendarMonth");

    public final String value;

    private PensionPensionProRataMethodEnum(String value) {
        this.value = value;
    }
}
