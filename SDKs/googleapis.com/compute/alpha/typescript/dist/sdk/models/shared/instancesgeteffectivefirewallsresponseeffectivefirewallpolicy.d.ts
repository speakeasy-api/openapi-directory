import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyRule } from "./firewallpolicyrule";
/**
 * [Output Only] The type of the firewall policy. Can be one of HIERARCHY, NETWORK, NETWORK_REGIONAL.
 */
export declare enum InstancesGetEffectiveFirewallsResponseEffectiveFirewallPolicyTypeEnum {
    Hierarchy = "HIERARCHY",
    Network = "NETWORK",
    NetworkRegional = "NETWORK_REGIONAL",
    Unspecified = "UNSPECIFIED"
}
export declare class InstancesGetEffectiveFirewallsResponseEffectiveFirewallPolicy extends SpeakeasyBase {
    /**
     * [Output Only] Deprecated, please use short name instead. The display name of the firewall policy.
     */
    displayName?: string;
    /**
     * [Output Only] The name of the firewall policy.
     */
    name?: string;
    /**
     * The rules that apply to the network.
     */
    rules?: FirewallPolicyRule[];
    /**
     * [Output Only] The short name of the firewall policy.
     */
    shortName?: string;
    /**
     * [Output Only] The type of the firewall policy. Can be one of HIERARCHY, NETWORK, NETWORK_REGIONAL.
     */
    type?: InstancesGetEffectiveFirewallsResponseEffectiveFirewallPolicyTypeEnum;
}
