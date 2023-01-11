package openapisdk.models.shared;


public enum FolderStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETE_REQUESTED("DELETE_REQUESTED");

    public final String value;

    private FolderStateEnum(String value) {
        this.value = value;
    }
}
