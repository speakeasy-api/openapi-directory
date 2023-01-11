package openapisdk.models.operations;


public enum UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    FULL("full"),
    READ_ONLY("read-only"),
    GUEST_AMBASSADOR("guest-ambassador"),
    MONITOR_ONLY("monitor-only");

    public final String value;

    private UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum(String value) {
        this.value = value;
    }
}
