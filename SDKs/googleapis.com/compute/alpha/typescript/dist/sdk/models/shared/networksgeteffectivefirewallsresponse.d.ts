import { SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { NetworksGetEffectiveFirewallsResponseEffectiveFirewallPolicy } from "./networksgeteffectivefirewallsresponseeffectivefirewallpolicy";
import { NetworksGetEffectiveFirewallsResponseOrganizationFirewallPolicy } from "./networksgeteffectivefirewallsresponseorganizationfirewallpolicy";
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
    /**
     * Effective firewalls from organization policies.
     */
    organizationFirewalls?: NetworksGetEffectiveFirewallsResponseOrganizationFirewallPolicy[];
}
