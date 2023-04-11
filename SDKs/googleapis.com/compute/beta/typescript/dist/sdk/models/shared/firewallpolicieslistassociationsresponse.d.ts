import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyAssociation } from "./firewallpolicyassociation";
/**
 * Successful response
 */
export declare class FirewallPoliciesListAssociationsResponse extends SpeakeasyBase {
    /**
     * A list of associations.
     */
    associations?: FirewallPolicyAssociation[];
    /**
     * [Output Only] Type of firewallPolicy associations. Always compute#FirewallPoliciesListAssociations for lists of firewallPolicy associations.
     */
    kind?: string;
}
