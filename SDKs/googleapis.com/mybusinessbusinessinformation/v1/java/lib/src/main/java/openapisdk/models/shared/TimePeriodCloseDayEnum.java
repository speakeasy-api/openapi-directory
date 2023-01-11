package openapisdk.models.shared;


public enum TimePeriodCloseDayEnum {
    DAY_OF_WEEK_UNSPECIFIED("DAY_OF_WEEK_UNSPECIFIED"),
    MONDAY("MONDAY"),
    TUESDAY("TUESDAY"),
    WEDNESDAY("WEDNESDAY"),
    THURSDAY("THURSDAY"),
    FRIDAY("FRIDAY"),
    SATURDAY("SATURDAY"),
    SUNDAY("SUNDAY");

    public final String value;

    private TimePeriodCloseDayEnum(String value) {
        this.value = value;
    }
}
