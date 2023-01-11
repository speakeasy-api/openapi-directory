package openapisdk.models.shared;


public enum DriveFolderTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    MY_DRIVE_ROOT("MY_DRIVE_ROOT"),
    SHARED_DRIVE_ROOT("SHARED_DRIVE_ROOT"),
    STANDARD_FOLDER("STANDARD_FOLDER");

    public final String value;

    private DriveFolderTypeEnum(String value) {
        this.value = value;
    }
}
