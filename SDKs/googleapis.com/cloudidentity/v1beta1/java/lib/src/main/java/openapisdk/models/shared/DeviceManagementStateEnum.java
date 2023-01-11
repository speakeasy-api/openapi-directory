package openapisdk.models.shared;


public enum DeviceManagementStateEnum {
    MANAGEMENT_STATE_UNSPECIFIED("MANAGEMENT_STATE_UNSPECIFIED"),
    APPROVED("APPROVED"),
    BLOCKED("BLOCKED"),
    PENDING("PENDING"),
    UNPROVISIONED("UNPROVISIONED"),
    WIPING("WIPING"),
    WIPED("WIPED");

    public final String value;

    private DeviceManagementStateEnum(String value) {
        this.value = value;
    }
}
