package openapisdk.models.shared;


public enum PermissionStageEnum {
    ALPHA("ALPHA"),
    BETA("BETA"),
    GA("GA"),
    DEPRECATED("DEPRECATED");

    public final String value;

    private PermissionStageEnum(String value) {
        this.value = value;
    }
}
