import { SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy } from "./regionnetworkfirewallpoliciesgeteffectivefirewallsresponseeffectivefirewallpolicy";
/**
 * Successful response
 */
export declare class RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponse extends SpeakeasyBase {
    /**
     * Effective firewalls from firewall policy.
     */
    firewallPolicys?: RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy[];
    /**
     * Effective firewalls on the network.
     */
    firewalls?: Firewall[];
}
