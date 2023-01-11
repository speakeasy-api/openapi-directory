package openapisdk.models.shared;


public enum EmployeeResultEmploymentSalaryUnitEnum {
    ANNUAL("annual"),
    HOUR("hour"),
    MONTH("month"),
    SEMI_MONTHLY("semi-monthly"),
    WEEK("week");

    public final String value;

    private EmployeeResultEmploymentSalaryUnitEnum(String value) {
        this.value = value;
    }
}
