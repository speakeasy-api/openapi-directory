package openapisdk.models.shared;


public enum ProjectLifecycleStateEnum {
    LIFECYCLE_STATE_UNSPECIFIED("LIFECYCLE_STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETE_REQUESTED("DELETE_REQUESTED"),
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS");

    public final String value;

    private ProjectLifecycleStateEnum(String value) {
        this.value = value;
    }
}
