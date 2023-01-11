package openapisdk.models.shared;


public enum OrderLineItemQuantitiesQuantityContextEnum {
    CONFIRMED("Confirmed"),
    INVOICED("Invoiced"),
    ORDERED("Ordered"),
    PRODUCED("Produced"),
    SHIPPED("Shipped");

    public final String value;

    private OrderLineItemQuantitiesQuantityContextEnum(String value) {
        this.value = value;
    }
}
