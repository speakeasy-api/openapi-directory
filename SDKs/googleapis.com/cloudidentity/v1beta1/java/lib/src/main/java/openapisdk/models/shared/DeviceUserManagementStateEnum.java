package openapisdk.models.shared;


public enum DeviceUserManagementStateEnum {
    MANAGEMENT_STATE_UNSPECIFIED("MANAGEMENT_STATE_UNSPECIFIED"),
    WIPING("WIPING"),
    WIPED("WIPED"),
    APPROVED("APPROVED"),
    BLOCKED("BLOCKED"),
    PENDING_APPROVAL("PENDING_APPROVAL"),
    UNENROLLED("UNENROLLED");

    public final String value;

    private DeviceUserManagementStateEnum(String value) {
        this.value = value;
    }
}
