import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * Response to a request to list policies for a given enterprise.
 */
export declare class ListPoliciesResponse extends SpeakeasyBase {
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of policies.
     */
    policies?: Policy[];
}
