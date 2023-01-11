package openapisdk.models.shared;


public enum AuditEventSourceEnum {
    CD("CD"),
    DEVAPI("DEVAPI");

    public final String value;

    private AuditEventSourceEnum(String value) {
        this.value = value;
    }
}
