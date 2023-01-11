package openapisdk.models.shared;


public enum ServiceLevelObjectiveCalendarPeriodEnum {
    CALENDAR_PERIOD_UNSPECIFIED("CALENDAR_PERIOD_UNSPECIFIED"),
    DAY("DAY"),
    WEEK("WEEK"),
    FORTNIGHT("FORTNIGHT"),
    MONTH("MONTH"),
    QUARTER("QUARTER"),
    HALF("HALF"),
    YEAR("YEAR");

    public final String value;

    private ServiceLevelObjectiveCalendarPeriodEnum(String value) {
        this.value = value;
    }
}
