package openapisdk.models.shared;


public enum PermissionPermissionVerbsEnum {
    READ("Read"),
    WRITE("Write"),
    DELETE("Delete"),
    ALL("All");

    public final String value;

    private PermissionPermissionVerbsEnum(String value) {
        this.value = value;
    }
}
