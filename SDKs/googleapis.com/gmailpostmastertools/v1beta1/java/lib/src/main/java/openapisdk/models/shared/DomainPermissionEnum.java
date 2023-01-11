package openapisdk.models.shared;


public enum DomainPermissionEnum {
    PERMISSION_UNSPECIFIED("PERMISSION_UNSPECIFIED"),
    OWNER("OWNER"),
    READER("READER"),
    NONE("NONE");

    public final String value;

    private DomainPermissionEnum(String value) {
        this.value = value;
    }
}
