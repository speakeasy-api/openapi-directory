import { SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { NetworksGetEffectiveFirewallsResponseEffectiveFirewallPolicy } from "./networksgeteffectivefirewallsresponseeffectivefirewallpolicy";
/**
 * Successful response
 */
export declare class NetworksGetEffectiveFirewallsResponse extends SpeakeasyBase {
    /**
     * Effective firewalls from firewall policy.
     */
    firewallPolicys?: NetworksGetEffectiveFirewallsResponseEffectiveFirewallPolicy[];
    /**
     * Effective firewalls on the network.
     */
    firewalls?: Firewall[];
}
