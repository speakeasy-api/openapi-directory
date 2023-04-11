import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
 */
export declare class Accounts extends SpeakeasyBase {
    /**
     * A list of accounts.
     */
    items?: Account[];
    /**
     * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Next link for this account collection.
     */
    nextLink?: string;
    /**
     * Previous link for this account collection.
     */
    previousLink?: string;
    /**
     * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number;
    /**
     * Email ID of the authenticated user
     */
    username?: string;
}
