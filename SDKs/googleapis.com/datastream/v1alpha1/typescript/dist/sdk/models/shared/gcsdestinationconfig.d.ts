import { SpeakeasyBase } from "../../../internal/utils";
import { JsonFileFormat } from "./jsonfileformat";
/**
 * File format that data should be written in. Deprecated field (b/169501737) - use file_format instead.
 */
export declare enum GcsDestinationConfigGcsFileFormatEnum {
    GcsFileFormatUnspecified = "GCS_FILE_FORMAT_UNSPECIFIED",
    Avro = "AVRO"
}
/**
 * Google Cloud Storage destination configuration
 */
export declare class GcsDestinationConfig extends SpeakeasyBase {
    /**
     * AVRO file format configuration.
     */
    avroFileFormat?: Record<string, any>;
    /**
     * The maximum duration for which new events are added before a file is closed and a new file is created.
     */
    fileRotationInterval?: string;
    /**
     * The maximum file size to be saved in the bucket.
     */
    fileRotationMb?: number;
    /**
     * File format that data should be written in. Deprecated field (b/169501737) - use file_format instead.
     */
    gcsFileFormat?: GcsDestinationConfigGcsFileFormatEnum;
    /**
     * JSON file format configuration.
     */
    jsonFileFormat?: JsonFileFormat;
    /**
     * Path inside the Cloud Storage bucket to write data to.
     */
    path?: string;
}
