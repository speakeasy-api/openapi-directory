package openapisdk.models.shared;


public enum InventoryItemTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    INSTALLED_PACKAGE("INSTALLED_PACKAGE"),
    AVAILABLE_PACKAGE("AVAILABLE_PACKAGE");

    public final String value;

    private InventoryItemTypeEnum(String value) {
        this.value = value;
    }
}
