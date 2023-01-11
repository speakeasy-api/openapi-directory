package openapisdk.models.shared;


public enum FieldTypeDefinitionTypeEnum {
    STRING("string"),
    NUMBER("number"),
    BOOL("bool"),
    DATETIME("datetime"),
    ENUMERATION("enumeration"),
    DATE("date"),
    PHONE_NUMBER("phone_number"),
    CURRENCY_NUMBER("currency_number"),
    JSON("json"),
    OBJECT_COORDINATES("object_coordinates");

    public final String value;

    private FieldTypeDefinitionTypeEnum(String value) {
        this.value = value;
    }
}
