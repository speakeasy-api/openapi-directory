import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
/**
 * Response message for the list method.
 */
export declare class ListClientsResponse extends SpeakeasyBase {
    /**
     * The returned list of clients.
     */
    clients?: Client[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
