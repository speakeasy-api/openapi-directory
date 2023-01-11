package openapisdk.models.shared;


public enum PermissionRoleEnum {
    COMMENTER("commenter"),
    FILE_ORGANIZER("fileOrganizer"),
    OWNER("owner"),
    PUBLISHED_READER("publishedReader"),
    READER("reader"),
    WRITER("writer");

    public final String value;

    private PermissionRoleEnum(String value) {
        this.value = value;
    }
}
