package openapisdk.models.shared;


public enum JsonFileFormatSchemaFileFormatEnum {
    SCHEMA_FILE_FORMAT_UNSPECIFIED("SCHEMA_FILE_FORMAT_UNSPECIFIED"),
    NO_SCHEMA_FILE("NO_SCHEMA_FILE"),
    AVRO_SCHEMA_FILE("AVRO_SCHEMA_FILE");

    public final String value;

    private JsonFileFormatSchemaFileFormatEnum(String value) {
        this.value = value;
    }
}
