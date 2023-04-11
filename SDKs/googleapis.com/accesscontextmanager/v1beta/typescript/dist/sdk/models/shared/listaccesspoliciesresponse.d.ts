import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicy } from "./accesspolicy";
/**
 * A response to `ListAccessPoliciesRequest`.
 */
export declare class ListAccessPoliciesResponse extends SpeakeasyBase {
    /**
     * List of the AccessPolicy instances.
     */
    accessPolicies?: AccessPolicy[];
    /**
     * The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
     */
    nextPageToken?: string;
}
