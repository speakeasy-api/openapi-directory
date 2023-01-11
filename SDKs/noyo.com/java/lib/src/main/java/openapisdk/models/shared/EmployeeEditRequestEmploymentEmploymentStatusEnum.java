package openapisdk.models.shared;


public enum EmployeeEditRequestEmploymentEmploymentStatusEnum {
    CONTRACT("contract"),
    DISABLED("disabled"),
    FULL_TIME("full-time"),
    PART_TIME("part-time"),
    RETIRED("retired"),
    TERMINATED("terminated");

    public final String value;

    private EmployeeEditRequestEmploymentEmploymentStatusEnum(String value) {
        this.value = value;
    }
}
