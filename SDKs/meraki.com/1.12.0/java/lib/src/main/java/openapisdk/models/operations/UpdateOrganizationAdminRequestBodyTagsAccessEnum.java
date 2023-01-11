package openapisdk.models.operations;


public enum UpdateOrganizationAdminRequestBodyTagsAccessEnum {
    FULL("full"),
    READ_ONLY("read-only"),
    GUEST_AMBASSADOR("guest-ambassador"),
    MONITOR_ONLY("monitor-only");

    public final String value;

    private UpdateOrganizationAdminRequestBodyTagsAccessEnum(String value) {
        this.value = value;
    }
}
