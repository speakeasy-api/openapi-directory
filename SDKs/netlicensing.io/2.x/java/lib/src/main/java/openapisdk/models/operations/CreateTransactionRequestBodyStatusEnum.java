package openapisdk.models.operations;


public enum CreateTransactionRequestBodyStatusEnum {
    CANCELLED("CANCELLED"),
    CLOSED("CLOSED"),
    PENDING("PENDING");

    public final String value;

    private CreateTransactionRequestBodyStatusEnum(String value) {
        this.value = value;
    }
}
