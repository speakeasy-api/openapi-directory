package openapisdk.models.operations;


public enum CreateOrganizationAdminRequestBodyTagsAccessEnum {
    FULL("full"),
    READ_ONLY("read-only"),
    GUEST_AMBASSADOR("guest-ambassador"),
    MONITOR_ONLY("monitor-only");

    public final String value;

    private CreateOrganizationAdminRequestBodyTagsAccessEnum(String value) {
        this.value = value;
    }
}
