package openapisdk.models.shared;


public enum EventAdditionalEventTypesEnum {
    COMMENT("comment"),
    CREATE("create"),
    EDIT("edit"),
    EMPTY_TRASH("emptyTrash"),
    MOVE("move"),
    PERMISSION_CHANGE("permissionChange"),
    RENAME("rename"),
    TRASH("trash"),
    UNKNOWN("unknown"),
    UNTRASH("untrash"),
    UPLOAD("upload");

    public final String value;

    private EventAdditionalEventTypesEnum(String value) {
        this.value = value;
    }
}
