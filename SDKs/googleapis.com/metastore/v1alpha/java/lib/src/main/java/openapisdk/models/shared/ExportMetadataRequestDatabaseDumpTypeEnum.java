package openapisdk.models.shared;


public enum ExportMetadataRequestDatabaseDumpTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    MYSQL("MYSQL"),
    AVRO("AVRO");

    public final String value;

    private ExportMetadataRequestDatabaseDumpTypeEnum(String value) {
        this.value = value;
    }
}
