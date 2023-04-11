import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Compression of the loaded JSON file.
 */
export declare enum JsonFileFormatCompressionEnum {
    JsonCompressionUnspecified = "JSON_COMPRESSION_UNSPECIFIED",
    NoCompression = "NO_COMPRESSION",
    Gzip = "GZIP"
}
/**
 * The schema file format along JSON data files.
 */
export declare enum JsonFileFormatSchemaFileFormatEnum {
    SchemaFileFormatUnspecified = "SCHEMA_FILE_FORMAT_UNSPECIFIED",
    NoSchemaFile = "NO_SCHEMA_FILE",
    AvroSchemaFile = "AVRO_SCHEMA_FILE"
}
/**
 * JSON file format configuration.
 */
export declare class JsonFileFormat extends SpeakeasyBase {
    /**
     * Compression of the loaded JSON file.
     */
    compression?: JsonFileFormatCompressionEnum;
    /**
     * The schema file format along JSON data files.
     */
    schemaFileFormat?: JsonFileFormatSchemaFileFormatEnum;
}
