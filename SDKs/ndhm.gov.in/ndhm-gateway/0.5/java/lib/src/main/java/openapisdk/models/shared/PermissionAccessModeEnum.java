package openapisdk.models.shared;


public enum PermissionAccessModeEnum {
    VIEW("VIEW"),
    STORE("STORE"),
    QUERY("QUERY"),
    STREAM("STREAM");

    public final String value;

    private PermissionAccessModeEnum(String value) {
        this.value = value;
    }
}
