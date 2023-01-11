package openapisdk.models.shared;


public enum EmployeeCreateRequestEmploymentSalaryUnitEnum {
    ANNUAL("annual"),
    HOUR("hour"),
    MONTH("month"),
    SEMI_MONTHLY("semi-monthly"),
    WEEK("week");

    public final String value;

    private EmployeeCreateRequestEmploymentSalaryUnitEnum(String value) {
        this.value = value;
    }
}
