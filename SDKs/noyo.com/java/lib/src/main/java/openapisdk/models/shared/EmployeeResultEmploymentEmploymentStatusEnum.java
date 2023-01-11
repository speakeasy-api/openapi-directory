package openapisdk.models.shared;


public enum EmployeeResultEmploymentEmploymentStatusEnum {
    CONTRACT("contract"),
    DISABLED("disabled"),
    FULL_TIME("full-time"),
    PART_TIME("part-time"),
    RETIRED("retired"),
    TERMINATED("terminated");

    public final String value;

    private EmployeeResultEmploymentEmploymentStatusEnum(String value) {
        this.value = value;
    }
}
