package openapisdk.models.shared;


public enum EmployeeEmployeeWorkingWeekEnum {
    NONE("None"),
    MONDAY("Monday"),
    TUESDAY("Tuesday"),
    WEDNESDAY("Wednesday"),
    THURSDAY("Thursday"),
    FRIDAY("Friday"),
    ALL_WEEK_DAYS("AllWeekDays"),
    SATURDAY("Saturday"),
    SUNDAY("Sunday"),
    ALL_DAYS("AllDays");

    public final String value;

    private EmployeeEmployeeWorkingWeekEnum(String value) {
        this.value = value;
    }
}
