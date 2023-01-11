package openapisdk.models.shared;


public enum PlacementActiveStatusEnum {
    PLACEMENT_STATUS_UNKNOWN("PLACEMENT_STATUS_UNKNOWN"),
    PLACEMENT_STATUS_ACTIVE("PLACEMENT_STATUS_ACTIVE"),
    PLACEMENT_STATUS_INACTIVE("PLACEMENT_STATUS_INACTIVE"),
    PLACEMENT_STATUS_ARCHIVED("PLACEMENT_STATUS_ARCHIVED"),
    PLACEMENT_STATUS_PERMANENTLY_ARCHIVED("PLACEMENT_STATUS_PERMANENTLY_ARCHIVED");

    public final String value;

    private PlacementActiveStatusEnum(String value) {
        this.value = value;
    }
}
