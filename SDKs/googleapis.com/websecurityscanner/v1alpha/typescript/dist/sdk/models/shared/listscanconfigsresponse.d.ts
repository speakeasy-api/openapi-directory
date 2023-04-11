import { SpeakeasyBase } from "../../../internal/utils";
import { ScanConfig } from "./scanconfig";
/**
 * Response for the `ListScanConfigs` method.
 */
export declare class ListScanConfigsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of ScanConfigs returned.
     */
    scanConfigs?: ScanConfig[];
}
