package openapisdk.models.shared;


public enum InventorySourceStatusConfigStatusEnum {
    INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED("INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED"),
    INVENTORY_SOURCE_CONFIG_STATUS_PENDING("INVENTORY_SOURCE_CONFIG_STATUS_PENDING"),
    INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED("INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED");

    public final String value;

    private InventorySourceStatusConfigStatusEnum(String value) {
        this.value = value;
    }
}
