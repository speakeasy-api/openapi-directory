package openapisdk.models.shared;


public enum MetadataExportDatabaseDumpTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    MYSQL("MYSQL"),
    AVRO("AVRO");

    public final String value;

    private MetadataExportDatabaseDumpTypeEnum(String value) {
        this.value = value;
    }
}
