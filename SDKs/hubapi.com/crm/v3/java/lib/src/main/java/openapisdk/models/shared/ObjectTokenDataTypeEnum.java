package openapisdk.models.shared;


public enum ObjectTokenDataTypeEnum {
    BOOLEAN_("BOOLEAN"),
    CURRENCY("CURRENCY"),
    DATE("DATE"),
    DATETIME("DATETIME"),
    EMAIL("EMAIL"),
    LINK("LINK"),
    NUMERIC("NUMERIC"),
    STRING("STRING"),
    STATUS("STATUS");

    public final String value;

    private ObjectTokenDataTypeEnum(String value) {
        this.value = value;
    }
}
