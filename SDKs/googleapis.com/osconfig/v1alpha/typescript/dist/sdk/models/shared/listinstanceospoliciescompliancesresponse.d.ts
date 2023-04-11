import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceOSPoliciesCompliance } from "./instanceospoliciescompliance";
/**
 * A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
 */
export declare class ListInstanceOSPoliciesCompliancesResponse extends SpeakeasyBase {
    /**
     * List of instance OS policies compliance objects.
     */
    instanceOsPoliciesCompliances?: InstanceOSPoliciesCompliance[];
    /**
     * The pagination token to retrieve the next page of instance OS policies compliance objects.
     */
    nextPageToken?: string;
}
