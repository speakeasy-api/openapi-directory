package openapisdk.models.shared;


public enum OperationStatusEnum {
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    DONE("DONE");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
