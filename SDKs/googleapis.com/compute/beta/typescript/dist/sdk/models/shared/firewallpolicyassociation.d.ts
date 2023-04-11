import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class FirewallPolicyAssociation extends SpeakeasyBase {
    /**
     * The target that the firewall policy is attached to.
     */
    attachmentTarget?: string;
    /**
     * [Output Only] Deprecated, please use short name instead. The display name of the firewall policy of the association.
     */
    displayName?: string;
    /**
     * [Output Only] The firewall policy ID of the association.
     */
    firewallPolicyId?: string;
    /**
     * The name for an association.
     */
    name?: string;
    /**
     * [Output Only] The short name of the firewall policy of the association.
     */
    shortName?: string;
}
