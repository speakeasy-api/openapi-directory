package openapisdk.models.shared;


public enum GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum {
    MANAGEMENT_STATE_UNSPECIFIED("MANAGEMENT_STATE_UNSPECIFIED"),
    WIPING("WIPING"),
    WIPED("WIPED"),
    APPROVED("APPROVED"),
    BLOCKED("BLOCKED"),
    PENDING_APPROVAL("PENDING_APPROVAL"),
    UNENROLLED("UNENROLLED");

    public final String value;

    private GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum(String value) {
        this.value = value;
    }
}
