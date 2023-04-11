import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * The output format of the report. Only available once the file is available.
 */
export declare enum FileFormatEnum {
    Csv = "CSV",
    Excel = "EXCEL"
}
/**
 * The status of the report file.
 */
export declare enum FileStatusEnum {
    Processing = "PROCESSING",
    ReportAvailable = "REPORT_AVAILABLE",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Queued = "QUEUED"
}
/**
 * The URLs where the completed report file can be downloaded.
 */
export declare class FileUrls extends SpeakeasyBase {
    /**
     * The URL for downloading the report data through the API.
     */
    apiUrl?: string;
    /**
     * The URL for downloading the report data through a browser.
     */
    browserUrl?: string;
}
/**
 * Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
 */
export declare class File extends SpeakeasyBase {
    /**
     * Represents a date range.
     */
    dateRange?: DateRange;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The filename of the file.
     */
    fileName?: string;
    /**
     * The output format of the report. Only available once the file is available.
     */
    format?: FileFormatEnum;
    /**
     * The unique ID of this report file.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#file".
     */
    kind?: string;
    /**
     * The timestamp in milliseconds since epoch when this file was last modified.
     */
    lastModifiedTime?: string;
    /**
     * The ID of the report this file was generated from.
     */
    reportId?: string;
    /**
     * The status of the report file.
     */
    status?: FileStatusEnum;
    /**
     * The URLs where the completed report file can be downloaded.
     */
    urls?: FileUrls;
}
