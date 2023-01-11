package openapisdk.models.shared;


public enum ApigatewayAuditLogConfigLogTypeEnum {
    LOG_TYPE_UNSPECIFIED("LOG_TYPE_UNSPECIFIED"),
    ADMIN_READ("ADMIN_READ"),
    DATA_WRITE("DATA_WRITE"),
    DATA_READ("DATA_READ");

    public final String value;

    private ApigatewayAuditLogConfigLogTypeEnum(String value) {
        this.value = value;
    }
}
