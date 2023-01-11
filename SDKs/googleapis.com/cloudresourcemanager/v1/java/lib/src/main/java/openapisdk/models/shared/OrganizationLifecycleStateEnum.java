package openapisdk.models.shared;


public enum OrganizationLifecycleStateEnum {
    LIFECYCLE_STATE_UNSPECIFIED("LIFECYCLE_STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETE_REQUESTED("DELETE_REQUESTED");

    public final String value;

    private OrganizationLifecycleStateEnum(String value) {
        this.value = value;
    }
}
