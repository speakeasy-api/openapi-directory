package openapisdk.models.operations;


public enum ListSortEnum {
    CREATED_AT("createdAt"),
    MINUS_CREATED_AT("-createdAt"),
    ORDER_ID("orderId"),
    MINUS_ORDER_ID("-orderId"),
    PRICING_TOTAL("pricing.total"),
    MINUS_PRICING_TOTAL("-pricing.total");

    public final String value;

    private ListSortEnum(String value) {
        this.value = value;
    }
}
