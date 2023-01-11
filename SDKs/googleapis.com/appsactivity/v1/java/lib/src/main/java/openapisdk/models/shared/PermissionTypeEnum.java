package openapisdk.models.shared;


public enum PermissionTypeEnum {
    ANYONE("anyone"),
    DOMAIN("domain"),
    GROUP("group"),
    USER("user");

    public final String value;

    private PermissionTypeEnum(String value) {
        this.value = value;
    }
}
