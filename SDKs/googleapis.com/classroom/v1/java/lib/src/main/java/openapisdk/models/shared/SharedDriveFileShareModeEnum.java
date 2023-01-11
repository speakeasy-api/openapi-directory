package openapisdk.models.shared;


public enum SharedDriveFileShareModeEnum {
    UNKNOWN_SHARE_MODE("UNKNOWN_SHARE_MODE"),
    VIEW("VIEW"),
    EDIT("EDIT"),
    STUDENT_COPY("STUDENT_COPY");

    public final String value;

    private SharedDriveFileShareModeEnum(String value) {
        this.value = value;
    }
}
