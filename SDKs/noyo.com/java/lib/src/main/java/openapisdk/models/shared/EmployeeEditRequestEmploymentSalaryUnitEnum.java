package openapisdk.models.shared;


public enum EmployeeEditRequestEmploymentSalaryUnitEnum {
    ANNUAL("annual"),
    HOUR("hour"),
    MONTH("month"),
    SEMI_MONTHLY("semi-monthly"),
    WEEK("week");

    public final String value;

    private EmployeeEditRequestEmploymentSalaryUnitEnum(String value) {
        this.value = value;
    }
}
