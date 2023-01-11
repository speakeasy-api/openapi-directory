package openapisdk.models.shared;


public enum OperationStatusEnum {
    PENDING("pending"),
    DONE("done");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
