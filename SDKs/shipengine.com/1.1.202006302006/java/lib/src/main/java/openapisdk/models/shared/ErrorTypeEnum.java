package openapisdk.models.shared;


public enum ErrorTypeEnum {
    ACCOUNT_STATUS("account_status"),
    BUSINESS_RULES("business_rules"),
    VALIDATION("validation"),
    SECURITY("security"),
    SYSTEM("system"),
    INTEGRATIONS("integrations");

    public final String value;

    private ErrorTypeEnum(String value) {
        this.value = value;
    }
}
