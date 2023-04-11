import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The output format of the Dataproc Metastore service's logs.
 */
export declare enum TelemetryConfigLogFormatEnum {
    LogFormatUnspecified = "LOG_FORMAT_UNSPECIFIED",
    Legacy = "LEGACY",
    Json = "JSON"
}
/**
 * Telemetry Configuration for the Dataproc Metastore service.
 */
export declare class TelemetryConfig extends SpeakeasyBase {
    /**
     * The output format of the Dataproc Metastore service's logs.
     */
    logFormat?: TelemetryConfigLogFormatEnum;
}
