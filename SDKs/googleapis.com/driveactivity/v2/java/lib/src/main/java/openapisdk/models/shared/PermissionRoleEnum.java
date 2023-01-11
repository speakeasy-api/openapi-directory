package openapisdk.models.shared;


public enum PermissionRoleEnum {
    ROLE_UNSPECIFIED("ROLE_UNSPECIFIED"),
    OWNER("OWNER"),
    ORGANIZER("ORGANIZER"),
    FILE_ORGANIZER("FILE_ORGANIZER"),
    EDITOR("EDITOR"),
    COMMENTER("COMMENTER"),
    VIEWER("VIEWER"),
    PUBLISHED_VIEWER("PUBLISHED_VIEWER");

    public final String value;

    private PermissionRoleEnum(String value) {
        this.value = value;
    }
}
