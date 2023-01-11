package openapisdk.models.shared;


public enum DatabaseDumpTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    MYSQL("MYSQL"),
    AVRO("AVRO");

    public final String value;

    private DatabaseDumpTypeEnum(String value) {
        this.value = value;
    }
}
