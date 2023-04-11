import { SpeakeasyBase } from "../../../internal/utils";
import { DataTransfer } from "./datatransfer";
/**
 * Template for a collection of DataTransfer resources.
 */
export declare class DataTransfersListResponse extends SpeakeasyBase {
    /**
     * List of data transfer requests.
     */
    dataTransfers?: DataTransfer[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Identifies the resource as a collection of data transfer requests.
     */
    kind?: string;
    /**
     * Token to specify the next page in the list.
     */
    nextPageToken?: string;
}
