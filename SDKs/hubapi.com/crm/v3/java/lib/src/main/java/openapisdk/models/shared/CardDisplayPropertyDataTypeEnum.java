package openapisdk.models.shared;


public enum CardDisplayPropertyDataTypeEnum {
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

    private CardDisplayPropertyDataTypeEnum(String value) {
        this.value = value;
    }
}
