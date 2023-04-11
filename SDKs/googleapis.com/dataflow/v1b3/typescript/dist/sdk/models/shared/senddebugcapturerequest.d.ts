import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Format for the data field above (id=5).
 */
export declare enum SendDebugCaptureRequestDataFormatEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    Raw = "RAW",
    Json = "JSON",
    Zlib = "ZLIB",
    Brotli = "BROTLI"
}
/**
 * Request to send encoded debug information. Next ID: 8
 */
export declare class SendDebugCaptureRequest extends SpeakeasyBase {
    /**
     * The internal component id for which debug information is sent.
     */
    componentId?: string;
    /**
     * The encoded debug information.
     */
    data?: string;
    /**
     * Format for the data field above (id=5).
     */
    dataFormat?: SendDebugCaptureRequestDataFormatEnum;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     */
    location?: string;
    /**
     * The worker id, i.e., VM hostname.
     */
    workerId?: string;
}
