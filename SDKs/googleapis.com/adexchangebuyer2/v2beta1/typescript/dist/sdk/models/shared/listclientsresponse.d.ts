import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
/**
 * Successful response
 */
export declare class ListClientsResponse extends SpeakeasyBase {
    /**
     * The returned list of clients.
     */
    clients?: Client[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
