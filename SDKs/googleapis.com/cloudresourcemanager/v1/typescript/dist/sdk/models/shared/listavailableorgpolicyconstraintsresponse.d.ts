import { SpeakeasyBase } from "../../../internal/utils";
import { Constraint } from "./constraint";
/**
 * The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set).
 */
export declare class ListAvailableOrgPolicyConstraintsResponse extends SpeakeasyBase {
    /**
     * The collection of constraints that are settable on the request resource.
     */
    constraints?: Constraint[];
    /**
     * Page token used to retrieve the next page. This is currently not used.
     */
    nextPageToken?: string;
}
