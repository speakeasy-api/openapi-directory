import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { CreatedBy } from "./createdby";
import { ScanProfileEnum } from "./scanprofileenum";
import { ScanStatusEnum } from "./scanstatusenum";
import { TargetSimple } from "./targetsimple";


export enum ScanCrawlerStateEnum {
    Started = "started",
    Ended = "ended"
}


// ScanCrawlerStatus
/** 
 * The number of crawled URLs and total number of URLs in the queue
**/
export class ScanCrawlerStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: number;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


// ScanCrawler
/** 
 * Information on the status of the crawling step of the scanning process
**/
export class ScanCrawler extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScanCrawlerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ScanCrawlerStatus;

  @SpeakeasyMetadata({ data: "json, name=warning" })
  warning?: string[];
}

export enum ScanFingerprinterStateEnum {
    Started = "started",
    Ended = "ended"
}


// ScanFingerprinter
/** 
 * Information on the status of the crawling step of the scanning process
**/
export class ScanFingerprinter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScanFingerprinterStateEnum;

  @SpeakeasyMetadata({ data: "json, name=warning" })
  warning?: string[];
}

export enum ScanScannerStateEnum {
    Started = "started",
    Ended = "ended"
}


// ScanScannerStatus
/** 
 * The number of scanner tasks completed and total number of tasks in the queue
**/
export class ScanScannerStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: number;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


// ScanScanner
/** 
 * Information on the status of the search for vulnerabilities of the scanning process
**/
export class ScanScanner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScanScannerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ScanScannerStatus;

  @SpeakeasyMetadata({ data: "json, name=warning" })
  warning?: string[];
}


export class Scan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: Date;

  @SpeakeasyMetadata({ data: "json, name=crawler" })
  crawler?: ScanCrawler;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: CreatedBy;

  @SpeakeasyMetadata({ data: "json, name=fingerprinter" })
  fingerprinter?: ScanFingerprinter;

  @SpeakeasyMetadata({ data: "json, name=highs" })
  highs?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lows" })
  lows?: number;

  @SpeakeasyMetadata({ data: "json, name=mediums" })
  mediums?: number;

  @SpeakeasyMetadata({ data: "json, name=scan_profile" })
  scanProfile?: ScanProfileEnum;

  @SpeakeasyMetadata({ data: "json, name=scanner" })
  scanner?: ScanScanner;

  @SpeakeasyMetadata({ data: "json, name=started" })
  started?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ScanStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: TargetSimple;
}
