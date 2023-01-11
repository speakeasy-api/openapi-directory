package openapisdk.models.shared;


public enum AuditLogIncludeEnum {
    WEB("web"),
    GIT("git"),
    ALL("all");

    public final String value;

    private AuditLogIncludeEnum(String value) {
        this.value = value;
    }
}
