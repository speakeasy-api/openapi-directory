package openapisdk.models.operations;


public enum UpdateTransactionRequestBodyStatusEnum {
    CANCELLED("CANCELLED"),
    CLOSED("CLOSED"),
    PENDING("PENDING");

    public final String value;

    private UpdateTransactionRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}
