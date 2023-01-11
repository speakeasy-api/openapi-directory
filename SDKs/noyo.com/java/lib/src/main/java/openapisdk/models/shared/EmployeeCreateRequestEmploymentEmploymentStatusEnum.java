package openapisdk.models.shared;


public enum EmployeeCreateRequestEmploymentEmploymentStatusEnum {
    CONTRACT("contract"),
    DISABLED("disabled"),
    FULL_TIME("full-time"),
    PART_TIME("part-time"),
    RETIRED("retired"),
    TERMINATED("terminated");

    public final String value;

    private EmployeeCreateRequestEmploymentEmploymentStatusEnum(String value) {
        this.value = value;
    }
}
