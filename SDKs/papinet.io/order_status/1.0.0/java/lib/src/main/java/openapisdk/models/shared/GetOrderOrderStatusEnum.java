package openapisdk.models.shared;


public enum GetOrderOrderStatusEnum {
    ACTIVE("Active"),
    CANCELLED("Cancelled"),
    COMPLETED("Completed");

    public final String value;

    private GetOrderOrderStatusEnum(String value) {
        this.value = value;
    }
}
