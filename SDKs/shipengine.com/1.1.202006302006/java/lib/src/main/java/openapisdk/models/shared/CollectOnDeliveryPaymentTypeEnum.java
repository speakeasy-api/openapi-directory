package openapisdk.models.shared;


public enum CollectOnDeliveryPaymentTypeEnum {
    ANY("any"),
    CASH("cash"),
    CASH_EQUIVALENT("cash_equivalent"),
    NONE("none");

    public final String value;

    private CollectOnDeliveryPaymentTypeEnum(String value) {
        this.value = value;
    }
}
