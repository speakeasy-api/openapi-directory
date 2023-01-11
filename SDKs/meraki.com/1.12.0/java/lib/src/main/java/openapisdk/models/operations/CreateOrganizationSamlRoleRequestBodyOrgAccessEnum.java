package openapisdk.models.operations;


public enum CreateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    NONE("none"),
    READ_ONLY("read-only"),
    FULL("full");

    public final String value;

    private CreateOrganizationSamlRoleRequestBodyOrgAccessEnum(String value) {
        this.value = value;
    }
}
