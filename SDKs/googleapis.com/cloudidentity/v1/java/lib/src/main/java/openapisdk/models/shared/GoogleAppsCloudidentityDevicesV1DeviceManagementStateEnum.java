package openapisdk.models.shared;


public enum GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum {
    MANAGEMENT_STATE_UNSPECIFIED("MANAGEMENT_STATE_UNSPECIFIED"),
    APPROVED("APPROVED"),
    BLOCKED("BLOCKED"),
    PENDING("PENDING"),
    UNPROVISIONED("UNPROVISIONED"),
    WIPING("WIPING"),
    WIPED("WIPED");

    public final String value;

    private GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum(String value) {
        this.value = value;
    }
}
