package openapisdk.models.operations;


public enum UpdateOrganizationAdminRequestBodyNetworksAccessEnum {
    FULL("full"),
    READ_ONLY("read-only"),
    GUEST_AMBASSADOR("guest-ambassador"),
    MONITOR_ONLY("monitor-only");

    public final String value;

    private UpdateOrganizationAdminRequestBodyNetworksAccessEnum(String value) {
        this.value = value;
    }
}
