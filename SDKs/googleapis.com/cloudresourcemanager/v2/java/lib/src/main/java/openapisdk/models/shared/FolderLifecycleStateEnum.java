package openapisdk.models.shared;


public enum FolderLifecycleStateEnum {
    LIFECYCLE_STATE_UNSPECIFIED("LIFECYCLE_STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETE_REQUESTED("DELETE_REQUESTED");

    public final String value;

    private FolderLifecycleStateEnum(String value) {
        this.value = value;
    }
}
