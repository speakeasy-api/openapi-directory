package openapisdk.models.shared;


public enum InventorySourceDeliveryMethodEnum {
    INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED("INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED"),
    INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC("INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC"),
    INVENTORY_SOURCE_DELIVERY_METHOD_TAG("INVENTORY_SOURCE_DELIVERY_METHOD_TAG");

    public final String value;

    private InventorySourceDeliveryMethodEnum(String value) {
        this.value = value;
    }
}
