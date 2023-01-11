package openapisdk.models.operations;


public enum DfareportingPlacementsListActiveStatusEnum {
    PLACEMENT_STATUS_UNKNOWN("PLACEMENT_STATUS_UNKNOWN"),
    PLACEMENT_STATUS_ACTIVE("PLACEMENT_STATUS_ACTIVE"),
    PLACEMENT_STATUS_INACTIVE("PLACEMENT_STATUS_INACTIVE"),
    PLACEMENT_STATUS_ARCHIVED("PLACEMENT_STATUS_ARCHIVED"),
    PLACEMENT_STATUS_PERMANENTLY_ARCHIVED("PLACEMENT_STATUS_PERMANENTLY_ARCHIVED");

    public final String value;

    private DfareportingPlacementsListActiveStatusEnum(String value) {
        this.value = value;
    }
}
