import { SpeakeasyBase } from "../../../internal/utils";
import { OrgPolicy } from "./orgpolicy";
/**
 * The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
 */
export declare class ListOrgPoliciesResponse extends SpeakeasyBase {
    /**
     * Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.
     */
    nextPageToken?: string;
    /**
     * The `Policies` that are set on the resource. It will be empty if no `Policies` are set.
     */
    policies?: OrgPolicy[];
}
