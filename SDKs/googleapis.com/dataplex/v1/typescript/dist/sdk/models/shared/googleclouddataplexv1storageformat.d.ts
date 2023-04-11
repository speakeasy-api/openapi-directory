import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1StorageFormatCsvOptions } from "./googleclouddataplexv1storageformatcsvoptions";
import { GoogleCloudDataplexV1StorageFormatIcebergOptions } from "./googleclouddataplexv1storageformaticebergoptions";
import { GoogleCloudDataplexV1StorageFormatJsonOptions } from "./googleclouddataplexv1storageformatjsonoptions";
/**
 * Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed.
 */
export declare enum GoogleCloudDataplexV1StorageFormatCompressionFormatEnum {
    CompressionFormatUnspecified = "COMPRESSION_FORMAT_UNSPECIFIED",
    Gzip = "GZIP",
    Bzip2 = "BZIP2"
}
/**
 * Describes the format of the data within its storage location.
 */
export declare class GoogleCloudDataplexV1StorageFormatInput extends SpeakeasyBase {
    /**
     * Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed.
     */
    compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
    /**
     * Describes CSV and similar semi-structured data formats.
     */
    csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;
    /**
     * Describes Iceberg data format.
     */
    iceberg?: GoogleCloudDataplexV1StorageFormatIcebergOptions;
    /**
     * Describes JSON data format.
     */
    json?: GoogleCloudDataplexV1StorageFormatJsonOptions;
    /**
     * Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype}
     */
    mimeType?: string;
}
/**
 * Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type.
 */
export declare enum GoogleCloudDataplexV1StorageFormatFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Parquet = "PARQUET",
    Avro = "AVRO",
    Orc = "ORC",
    Csv = "CSV",
    Json = "JSON",
    Image = "IMAGE",
    Audio = "AUDIO",
    Video = "VIDEO",
    Text = "TEXT",
    Tfrecord = "TFRECORD",
    Other = "OTHER",
    Unknown = "UNKNOWN"
}
/**
 * Describes the format of the data within its storage location.
 */
export declare class GoogleCloudDataplexV1StorageFormat extends SpeakeasyBase {
    /**
     * Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed.
     */
    compressionFormat?: GoogleCloudDataplexV1StorageFormatCompressionFormatEnum;
    /**
     * Describes CSV and similar semi-structured data formats.
     */
    csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;
    /**
     * Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type.
     */
    format?: GoogleCloudDataplexV1StorageFormatFormatEnum;
    /**
     * Describes Iceberg data format.
     */
    iceberg?: GoogleCloudDataplexV1StorageFormatIcebergOptions;
    /**
     * Describes JSON data format.
     */
    json?: GoogleCloudDataplexV1StorageFormatJsonOptions;
    /**
     * Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype}
     */
    mimeType?: string;
}
