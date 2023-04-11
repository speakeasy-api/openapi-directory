import { SpeakeasyBase } from "../../../internal/utils";
import { ScanRun } from "./scanrun";
/**
 * Response for the `ListScanRuns` method.
 */
export declare class ListScanRunsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of ScanRuns returned.
     */
    scanRuns?: ScanRun[];
}
