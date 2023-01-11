package openapisdk.models.shared;


public enum RoleStageEnum {
    ALPHA("ALPHA"),
    BETA("BETA"),
    GA("GA"),
    DEPRECATED("DEPRECATED"),
    DISABLED("DISABLED"),
    EAP("EAP");

    public final String value;

    private RoleStageEnum(String value) {
        this.value = value;
    }
}
