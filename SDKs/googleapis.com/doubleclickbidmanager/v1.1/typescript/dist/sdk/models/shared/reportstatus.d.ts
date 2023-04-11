import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFailure } from "./reportfailure";
/**
 * The file type of the report.
 */
export declare enum ReportStatusFormatEnum {
    Csv = "CSV",
    ExcelCsv = "EXCEL_CSV",
    Xlsx = "XLSX"
}
/**
 * The state of the report.
 */
export declare enum ReportStatusStateEnum {
    Running = "RUNNING",
    Done = "DONE",
    Failed = "FAILED"
}
/**
 * Report status.
 */
export declare class ReportStatus extends SpeakeasyBase {
    /**
     * An explanation of a report failure.
     */
    failure?: ReportFailure;
    /**
     * The time when this report either completed successfully or failed.
     */
    finishTimeMs?: string;
    /**
     * The file type of the report.
     */
    format?: ReportStatusFormatEnum;
    /**
     * The state of the report.
     */
    state?: ReportStatusStateEnum;
}
