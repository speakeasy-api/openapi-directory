package openapisdk.models.operations;


public enum GetOrdersOrderStatusEnum {
    ACTIVE("Active"),
    CANCELLED("Cancelled"),
    COMPLETED("Completed");

    public final String value;

    private GetOrdersOrderStatusEnum(String value) {
        this.value = value;
    }
}
