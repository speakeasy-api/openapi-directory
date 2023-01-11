package openapisdk.models.shared;


public enum EcommerceDataActionTypeEnum {
    UNKNOWN("UNKNOWN"),
    CLICK("CLICK"),
    DETAILS_VIEW("DETAILS_VIEW"),
    ADD_TO_CART("ADD_TO_CART"),
    REMOVE_FROM_CART("REMOVE_FROM_CART"),
    CHECKOUT("CHECKOUT"),
    PAYMENT("PAYMENT"),
    REFUND("REFUND"),
    CHECKOUT_OPTION("CHECKOUT_OPTION");

    public final String value;

    private EcommerceDataActionTypeEnum(String value) {
        this.value = value;
    }
}
