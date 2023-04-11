import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { CreatedBy } from "./createdby";
import { ScanProfileEnum } from "./scanprofileenum";
import { ScanStatusEnum } from "./scanstatusenum";
import { TargetSimple } from "./targetsimple";
/**
 * The current state of the crawler
 */
export declare enum ScanCrawlerStateEnum {
    Started = "started",
    Ended = "ended"
}
/**
 * The number of crawled URLs and total number of URLs in the queue
 */
export declare class ScanCrawlerStatus extends SpeakeasyBase {
    /**
     * Number of crawled URLs
     */
    zero?: number;
    /**
     * Total number of URLs in the queue
     */
    one?: number;
}
/**
 * Information on the status of the crawling step of the scanning process
 */
export declare class ScanCrawler extends SpeakeasyBase {
    /**
     * List of possible errors from the crawler
     */
    error?: string[];
    /**
     * The current state of the crawler
     */
    state?: ScanCrawlerStateEnum;
    /**
     * The number of crawled URLs and total number of URLs in the queue
     */
    status?: ScanCrawlerStatus;
    /**
     * List of possible warnings from the crawler
     */
    warning?: string[];
}
/**
 * The current state of the fingerprinter
 */
export declare enum ScanFingerprinterStateEnum {
    Started = "started",
    Ended = "ended"
}
/**
 * Information on the status of the crawling step of the scanning process
 */
export declare class ScanFingerprinter extends SpeakeasyBase {
    /**
     * The number of detected frameworks/software on the target
     */
    count?: number;
    /**
     * List of possible errors from the fingerprinter
     */
    error?: string[];
    /**
     * The current state of the fingerprinter
     */
    state?: ScanFingerprinterStateEnum;
    /**
     * List of possible warnings from the fingerprinter
     */
    warning?: string[];
}
/**
 * The current state of the scanner
 */
export declare enum ScanScannerStateEnum {
    Started = "started",
    Ended = "ended"
}
/**
 * The number of scanner tasks completed and total number of tasks in the queue
 */
export declare class ScanScannerStatus extends SpeakeasyBase {
    /**
     * Number of completed tasks
     */
    zero?: number;
    /**
     * Total number of tasks in the queue
     */
    one?: number;
}
/**
 * Information on the status of the search for vulnerabilities of the scanning process
 */
export declare class ScanScanner extends SpeakeasyBase {
    /**
     * List of possible errors from the scanner
     */
    error?: string[];
    /**
     * The current state of the scanner
     */
    state?: ScanScannerStateEnum;
    /**
     * The number of scanner tasks completed and total number of tasks in the queue
     */
    status?: ScanScannerStatus;
    /**
     * List of possible warnings from the scanner
     */
    warning?: string[];
}
/**
 * Event object.
 */
export declare class Scan extends SpeakeasyBase {
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * Date time of scan completion
     */
    completed?: Date;
    /**
     * Information on the status of the crawling step of the scanning process
     */
    crawler?: ScanCrawler;
    /**
     * Date time of creation
     */
    created?: Date;
    /**
     * User that created the object
     */
    createdBy?: CreatedBy;
    /**
     * Information on the status of the crawling step of the scanning process
     */
    fingerprinter?: ScanFingerprinter;
    /**
     * Number of high severity findings in this scan
     */
    highs?: number;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Number of low severity findings in this scan
     */
    lows?: number;
    /**
     * Number of medium severity findings in this scan
     */
    mediums?: number;
    /**
     * * lightning - fast simple scan
     *
     * @remarks
     * * normal - default profile
     * * full - does everything the default profile does and adds boolean based
     * SQL injection tests
     * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
     * and tries fewer payloads for SQL injection tests
     *
     */
    scanProfile?: ScanProfileEnum;
    /**
     * Information on the status of the search for vulnerabilities of the scanning process
     */
    scanner?: ScanScanner;
    /**
     * Date time of scan start
     */
    started?: Date;
    /**
     * Current scan status:
     *
     * @remarks
     *   * queued - Scan queued to start
     *   * started - Scan currently running
     *   * under_review - Scan is complete but we need to verify some findings
     *   * completed - Scan complete
     *   * completed_with_errors - Scan complete with error(s) in non essential modules
     *   * failed - Something went seriously wrong during the scan
     *   * canceled - Scan was canceled
     *   * canceling - Stopping scan
     *
     */
    status?: ScanStatusEnum;
    target?: TargetSimple;
}
