import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedAccount } from "./linkedaccount";
/**
 * Successful response
 */
export declare class AccountsListLinksResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#accountsListLinksResponse`".
     */
    kind?: string;
    /**
     * The list of available links.
     */
    links?: LinkedAccount[];
    /**
     * The token for the retrieval of the next page of links.
     */
    nextPageToken?: string;
}
