import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The file type of the report.
 */
export declare enum ReportStatusFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Csv = "CSV",
    Xlsx = "XLSX"
}
/**
 * Output only. The state of the report.
 */
export declare enum ReportStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Running = "RUNNING",
    Done = "DONE",
    Failed = "FAILED"
}
/**
 * Report status.
 */
export declare class ReportStatus extends SpeakeasyBase {
    /**
     * Output only. The time when this report either completed successfully or failed.
     */
    finishTime?: string;
    /**
     * The file type of the report.
     */
    format?: ReportStatusFormatEnum;
    /**
     * Output only. The state of the report.
     */
    state?: ReportStatusStateEnum;
}
