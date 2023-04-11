import { SpeakeasyBase } from "../../../internal/utils";
import { EkmConnection } from "./ekmconnection";
/**
 * Response message for EkmService.ListEkmConnections.
 */
export declare class ListEkmConnectionsResponse extends SpeakeasyBase {
    /**
     * The list of EkmConnections.
     */
    ekmConnections?: EkmConnection[];
    /**
     * A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The total number of EkmConnections that matched the query.
     */
    totalSize?: number;
}
