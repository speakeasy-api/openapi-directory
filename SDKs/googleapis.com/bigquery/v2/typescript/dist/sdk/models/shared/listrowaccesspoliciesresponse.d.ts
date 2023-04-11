import { SpeakeasyBase } from "../../../internal/utils";
import { RowAccessPolicy } from "./rowaccesspolicy";
/**
 * Response message for the ListRowAccessPolicies method.
 */
export declare class ListRowAccessPoliciesResponse extends SpeakeasyBase {
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string;
    /**
     * Row access policies on the requested table.
     */
    rowAccessPolicies?: RowAccessPolicy[];
}
