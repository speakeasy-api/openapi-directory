import { SpeakeasyBase } from "../../../internal/utils";
import { DownloadHistory } from "./downloadhistory";
import { ErrorT } from "./error";
/**
 * List of download events
 */
export declare class DownloadHistoryDataList extends SpeakeasyBase {
    /**
     * Download events
     */
    data?: DownloadHistory[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Server-generated message, if any
     */
    message?: string;
    /**
     * The current page of results
     */
    page?: number;
    /**
     * The number of results per page
     */
    perPage?: number;
    /**
     * The total number of results across all pages
     */
    totalCount?: number;
}
