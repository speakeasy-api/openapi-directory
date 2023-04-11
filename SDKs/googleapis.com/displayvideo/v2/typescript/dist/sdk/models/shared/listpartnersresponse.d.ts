import { SpeakeasyBase } from "../../../internal/utils";
import { Partner } from "./partner";
/**
 * Successful response
 */
export declare class ListPartnersResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListPartners` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of partners. This list will be absent if empty.
     */
    partners?: Partner[];
}
