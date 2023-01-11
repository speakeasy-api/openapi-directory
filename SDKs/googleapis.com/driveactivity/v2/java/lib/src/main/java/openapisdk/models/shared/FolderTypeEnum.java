package openapisdk.models.shared;


public enum FolderTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    MY_DRIVE_ROOT("MY_DRIVE_ROOT"),
    TEAM_DRIVE_ROOT("TEAM_DRIVE_ROOT"),
    STANDARD_FOLDER("STANDARD_FOLDER");

    public final String value;

    private FolderTypeEnum(String value) {
        this.value = value;
    }
}
