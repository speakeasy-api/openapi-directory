package openapisdk.models.shared;


public enum PlacementGroupActiveStatusEnum {
    PLACEMENT_STATUS_UNKNOWN("PLACEMENT_STATUS_UNKNOWN"),
    PLACEMENT_STATUS_ACTIVE("PLACEMENT_STATUS_ACTIVE"),
    PLACEMENT_STATUS_INACTIVE("PLACEMENT_STATUS_INACTIVE"),
    PLACEMENT_STATUS_ARCHIVED("PLACEMENT_STATUS_ARCHIVED"),
    PLACEMENT_STATUS_PERMANENTLY_ARCHIVED("PLACEMENT_STATUS_PERMANENTLY_ARCHIVED");

    public final String value;

    private PlacementGroupActiveStatusEnum(String value) {
        this.value = value;
    }
}
