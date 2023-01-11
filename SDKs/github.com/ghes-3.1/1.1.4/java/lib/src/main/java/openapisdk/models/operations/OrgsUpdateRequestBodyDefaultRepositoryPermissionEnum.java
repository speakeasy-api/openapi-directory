package openapisdk.models.operations;


public enum OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum {
    READ("read"),
    WRITE("write"),
    ADMIN("admin"),
    NONE("none");

    public final String value;

    private OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum(String value) {
        this.value = value;
    }
}
