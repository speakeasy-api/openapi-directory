package openapisdk.models.shared;


public enum EventPrimaryEventTypeEnum {
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

    private EventPrimaryEventTypeEnum(String value) {
        this.value = value;
    }
}
