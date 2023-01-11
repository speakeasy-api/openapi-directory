package openapisdk.models.shared;


public enum OrderHeaderOrderStatusEnum {
    ACTIVE("Active"),
    CANCELLED("Cancelled"),
    COMPLETED("Completed");

    public final String value;

    private OrderHeaderOrderStatusEnum(String value) {
        this.value = value;
    }
}
