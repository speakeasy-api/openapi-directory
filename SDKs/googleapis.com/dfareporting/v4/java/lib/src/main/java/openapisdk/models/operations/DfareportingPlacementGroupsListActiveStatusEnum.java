package openapisdk.models.operations;


public enum DfareportingPlacementGroupsListActiveStatusEnum {
    PLACEMENT_STATUS_UNKNOWN("PLACEMENT_STATUS_UNKNOWN"),
    PLACEMENT_STATUS_ACTIVE("PLACEMENT_STATUS_ACTIVE"),
    PLACEMENT_STATUS_INACTIVE("PLACEMENT_STATUS_INACTIVE"),
    PLACEMENT_STATUS_ARCHIVED("PLACEMENT_STATUS_ARCHIVED"),
    PLACEMENT_STATUS_PERMANENTLY_ARCHIVED("PLACEMENT_STATUS_PERMANENTLY_ARCHIVED");

    public final String value;

    private DfareportingPlacementGroupsListActiveStatusEnum(String value) {
        this.value = value;
    }
}
