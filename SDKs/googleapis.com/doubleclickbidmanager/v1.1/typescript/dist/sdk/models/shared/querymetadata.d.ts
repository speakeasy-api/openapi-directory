import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Range of report data.
 */
export declare enum QueryMetadataDataRangeEnum {
    CustomDates = "CUSTOM_DATES",
    CurrentDay = "CURRENT_DAY",
    PreviousDay = "PREVIOUS_DAY",
    WeekToDate = "WEEK_TO_DATE",
    MonthToDate = "MONTH_TO_DATE",
    QuarterToDate = "QUARTER_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    PreviousWeek = "PREVIOUS_WEEK",
    PreviousHalfMonth = "PREVIOUS_HALF_MONTH",
    PreviousMonth = "PREVIOUS_MONTH",
    PreviousQuarter = "PREVIOUS_QUARTER",
    PreviousYear = "PREVIOUS_YEAR",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS",
    Last90Days = "LAST_90_DAYS",
    Last365Days = "LAST_365_DAYS",
    AllTime = "ALL_TIME",
    Last14Days = "LAST_14_DAYS",
    TypeNotSupported = "TYPE_NOT_SUPPORTED",
    Last60Days = "LAST_60_DAYS"
}
/**
 * Format of the generated report.
 */
export declare enum QueryMetadataFormatEnum {
    Csv = "CSV",
    ExcelCsv = "EXCEL_CSV",
    Xlsx = "XLSX"
}
/**
 * Query metadata.
 */
export declare class QueryMetadata extends SpeakeasyBase {
    /**
     * Range of report data.
     */
    dataRange?: QueryMetadataDataRangeEnum;
    /**
     * Format of the generated report.
     */
    format?: QueryMetadataFormatEnum;
    /**
     * The path to the location in Google Cloud Storage where the latest report is stored.
     */
    googleCloudStoragePathForLatestReport?: string;
    /**
     * The path in Google Drive for the latest report.
     */
    googleDrivePathForLatestReport?: string;
    /**
     * The time when the latest report started to run.
     */
    latestReportRunTimeMs?: string;
    /**
     * Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English.
     */
    locale?: string;
    /**
     * Number of reports that have been generated for the query.
     */
    reportCount?: number;
    /**
     * Whether the latest report is currently running.
     */
    running?: boolean;
    /**
     * Whether to send an email notification when a report is ready. Default to false.
     */
    sendNotification?: boolean;
    /**
     * List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.
     */
    shareEmailAddress?: string[];
    /**
     * Query title. It is used to name the reports generated from this query.
     */
    title?: string;
}
