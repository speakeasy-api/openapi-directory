package openapisdk.models.operations;


public enum CreateOrganizationAdminRequestBodyNetworksAccessEnum {
    FULL("full"),
    READ_ONLY("read-only"),
    GUEST_AMBASSADOR("guest-ambassador"),
    MONITOR_ONLY("monitor-only");

    public final String value;

    private CreateOrganizationAdminRequestBodyNetworksAccessEnum(String value) {
        this.value = value;
    }
}
