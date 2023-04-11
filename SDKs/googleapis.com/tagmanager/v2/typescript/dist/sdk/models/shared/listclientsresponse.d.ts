import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
/**
 * Successful response
 */
export declare class ListClientsResponse extends SpeakeasyBase {
    /**
     * All GTM Clients of a GTM Container.
     */
    client?: Client[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
