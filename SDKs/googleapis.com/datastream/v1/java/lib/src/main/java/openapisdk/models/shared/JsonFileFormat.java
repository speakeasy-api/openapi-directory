package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JsonFileFormat
 * JSON file format configuration.
**/
public class JsonFileFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compression")
    public JsonFileFormatCompressionEnum compression;
    public JsonFileFormat withCompression(JsonFileFormatCompressionEnum compression) {
        this.compression = compression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaFileFormat")
    public JsonFileFormatSchemaFileFormatEnum schemaFileFormat;
    public JsonFileFormat withSchemaFileFormat(JsonFileFormatSchemaFileFormatEnum schemaFileFormat) {
        this.schemaFileFormat = schemaFileFormat;
        return this;
    }
}