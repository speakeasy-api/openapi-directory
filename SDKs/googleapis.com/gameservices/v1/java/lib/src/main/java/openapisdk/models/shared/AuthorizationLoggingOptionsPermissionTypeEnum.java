package openapisdk.models.shared;


public enum AuthorizationLoggingOptionsPermissionTypeEnum {
    PERMISSION_TYPE_UNSPECIFIED("PERMISSION_TYPE_UNSPECIFIED"),
    ADMIN_READ("ADMIN_READ"),
    ADMIN_WRITE("ADMIN_WRITE"),
    DATA_READ("DATA_READ"),
    DATA_WRITE("DATA_WRITE");

    public final String value;

    private AuthorizationLoggingOptionsPermissionTypeEnum(String value) {
        this.value = value;
    }
}
