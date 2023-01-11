package openapisdk.models.shared;


public enum GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum {
    OUTPUT_SCHEMA_UNSPECIFIED("OUTPUT_SCHEMA_UNSPECIFIED"),
    BASIC_COLUMNS("BASIC_COLUMNS"),
    GCS_COLUMNS("GCS_COLUMNS"),
    DATASTORE_COLUMNS("DATASTORE_COLUMNS"),
    BIG_QUERY_COLUMNS("BIG_QUERY_COLUMNS"),
    ALL_COLUMNS("ALL_COLUMNS");

    public final String value;

    private GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum(String value) {
        this.value = value;
    }
}
