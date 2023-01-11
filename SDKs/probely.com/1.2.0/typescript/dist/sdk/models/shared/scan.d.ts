import { SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { CreatedBy } from "./createdby";
import { ScanProfileEnum } from "./scanprofileenum";
import { ScanStatusEnum } from "./scanstatusenum";
import { TargetSimple } from "./targetsimple";
export declare enum ScanCrawlerStateEnum {
    Started = "started",
    Ended = "ended"
}
/**
 * The number of crawled URLs and total number of URLs in the queue
**/
export declare class ScanCrawlerStatus extends SpeakeasyBase {
    zero?: number;
    one?: number;
}
/**
 * Information on the status of the crawling step of the scanning process
**/
export declare class ScanCrawler extends SpeakeasyBase {
    error?: string[];
    state?: ScanCrawlerStateEnum;
    status?: ScanCrawlerStatus;
    warning?: string[];
}
export declare enum ScanFingerprinterStateEnum {
    Started = "started",
    Ended = "ended"
}
/**
 * Information on the status of the crawling step of the scanning process
**/
export declare class ScanFingerprinter extends SpeakeasyBase {
    count?: number;
    error?: string[];
    state?: ScanFingerprinterStateEnum;
    warning?: string[];
}
export declare enum ScanScannerStateEnum {
    Started = "started",
    Ended = "ended"
}
/**
 * The number of scanner tasks completed and total number of tasks in the queue
**/
export declare class ScanScannerStatus extends SpeakeasyBase {
    zero?: number;
    one?: number;
}
/**
 * Information on the status of the search for vulnerabilities of the scanning process
**/
export declare class ScanScanner extends SpeakeasyBase {
    error?: string[];
    state?: ScanScannerStateEnum;
    status?: ScanScannerStatus;
    warning?: string[];
}
export declare class Scan extends SpeakeasyBase {
    changed?: Date;
    changedBy?: ChangedBy;
    completed?: Date;
    crawler?: ScanCrawler;
    created?: Date;
    createdBy?: CreatedBy;
    fingerprinter?: ScanFingerprinter;
    highs?: number;
    id?: string;
    lows?: number;
    mediums?: number;
    scanProfile?: ScanProfileEnum;
    scanner?: ScanScanner;
    started?: Date;
    status?: ScanStatusEnum;
    target?: TargetSimple;
}
