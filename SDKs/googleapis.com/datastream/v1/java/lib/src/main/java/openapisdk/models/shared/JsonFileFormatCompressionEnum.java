package openapisdk.models.shared;


public enum JsonFileFormatCompressionEnum {
    JSON_COMPRESSION_UNSPECIFIED("JSON_COMPRESSION_UNSPECIFIED"),
    NO_COMPRESSION("NO_COMPRESSION"),
    GZIP("GZIP");

    public final String value;

    private JsonFileFormatCompressionEnum(String value) {
        this.value = value;
    }
}
