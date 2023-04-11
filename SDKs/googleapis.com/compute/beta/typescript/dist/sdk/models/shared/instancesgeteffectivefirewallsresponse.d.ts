import { SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { InstancesGetEffectiveFirewallsResponseEffectiveFirewallPolicy } from "./instancesgeteffectivefirewallsresponseeffectivefirewallpolicy";
import { InstancesGetEffectiveFirewallsResponseOrganizationFirewallPolicy } from "./instancesgeteffectivefirewallsresponseorganizationfirewallpolicy";
/**
 * Successful response
 */
export declare class InstancesGetEffectiveFirewallsResponse extends SpeakeasyBase {
    /**
     * Effective firewalls from firewall policies.
     */
    firewallPolicys?: InstancesGetEffectiveFirewallsResponseEffectiveFirewallPolicy[];
    /**
     * Effective firewalls on the instance.
     */
    firewalls?: Firewall[];
    /**
     * Effective firewalls from organization policies.
     */
    organizationFirewalls?: InstancesGetEffectiveFirewallsResponseOrganizationFirewallPolicy[];
}
