package openapisdk.models.operations;


public enum UpdateOrganizationAdminRequestBodyOrgAccessEnum {
    FULL("full"),
    READ_ONLY("read-only"),
    ENTERPRISE("enterprise"),
    NONE("none");

    public final String value;

    private UpdateOrganizationAdminRequestBodyOrgAccessEnum(String value) {
        this.value = value;
    }
}
