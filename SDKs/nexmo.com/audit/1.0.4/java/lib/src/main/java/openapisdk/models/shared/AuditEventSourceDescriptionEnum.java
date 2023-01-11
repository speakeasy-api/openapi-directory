package openapisdk.models.shared;


public enum AuditEventSourceDescriptionEnum {
    CUSTOMER_DASHBOARD("Customer Dashboard"),
    DEVELOPER_API("Developer API");

    public final String value;

    private AuditEventSourceDescriptionEnum(String value) {
        this.value = value;
    }
}
