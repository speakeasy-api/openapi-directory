package openapisdk.models.shared;


public enum TimePeriodOpenDayEnum {
    DAY_OF_WEEK_UNSPECIFIED("DAY_OF_WEEK_UNSPECIFIED"),
    MONDAY("MONDAY"),
    TUESDAY("TUESDAY"),
    WEDNESDAY("WEDNESDAY"),
    THURSDAY("THURSDAY"),
    FRIDAY("FRIDAY"),
    SATURDAY("SATURDAY"),
    SUNDAY("SUNDAY");

    public final String value;

    private TimePeriodOpenDayEnum(String value) {
        this.value = value;
    }
}
