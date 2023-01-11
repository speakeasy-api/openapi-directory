package openapisdk.models.operations;


public enum CreateOrganizationAdminRequestBodyOrgAccessEnum {
    FULL("full"),
    READ_ONLY("read-only"),
    ENTERPRISE("enterprise"),
    NONE("none");

    public final String value;

    private CreateOrganizationAdminRequestBodyOrgAccessEnum(String value) {
        this.value = value;
    }
}
