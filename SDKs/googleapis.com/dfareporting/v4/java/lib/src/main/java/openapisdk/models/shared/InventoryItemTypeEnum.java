package openapisdk.models.shared;


public enum InventoryItemTypeEnum {
    PLANNING_PLACEMENT_TYPE_REGULAR("PLANNING_PLACEMENT_TYPE_REGULAR"),
    PLANNING_PLACEMENT_TYPE_CREDIT("PLANNING_PLACEMENT_TYPE_CREDIT");

    public final String value;

    private InventoryItemTypeEnum(String value) {
        this.value = value;
    }
}
