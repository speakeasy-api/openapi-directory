package openapisdk.models.shared;


public enum OperationStatusEnum {
    SQL_OPERATION_STATUS_UNSPECIFIED("SQL_OPERATION_STATUS_UNSPECIFIED"),
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    DONE("DONE");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
