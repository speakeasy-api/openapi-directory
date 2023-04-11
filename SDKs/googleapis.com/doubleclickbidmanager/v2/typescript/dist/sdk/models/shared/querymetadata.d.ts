import { SpeakeasyBase } from "../../../internal/utils";
import { DataRange } from "./datarange";
/**
 * Format of the generated report.
 */
export declare enum QueryMetadataFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Csv = "CSV",
    Xlsx = "XLSX"
}
/**
 * Query metadata.
 */
export declare class QueryMetadata extends SpeakeasyBase {
    /**
     * Report data range.
     */
    dataRange?: DataRange;
    /**
     * Format of the generated report.
     */
    format?: QueryMetadataFormatEnum;
    /**
     * Whether to send an email notification when a report is ready. Defaults to false.
     */
    sendNotification?: boolean;
    /**
     * List of email addresses which are sent email notifications when the report is finished. Separate from send_notification.
     */
    shareEmailAddress?: string[];
    /**
     * Query title. It is used to name the reports generated from this query.
     */
    title?: string;
}
