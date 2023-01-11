package openapisdk.models.shared;


public enum EmployeeEmployeeSecondedEnum {
    NOT_SET("NotSet"),
    STAY183_DAYS_OR_MORE("Stay183DaysOrMore"),
    STAY_LESS_THAN183_DAYS("StayLessThan183Days"),
    IN_OUT_UK("InOutUk");

    public final String value;

    private EmployeeEmployeeSecondedEnum(String value) {
        this.value = value;
    }
}
