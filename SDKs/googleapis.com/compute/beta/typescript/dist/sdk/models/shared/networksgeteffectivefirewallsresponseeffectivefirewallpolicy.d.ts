import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyRule } from "./firewallpolicyrule";
/**
 * [Output Only] The type of the firewall policy.
 */
export declare enum NetworksGetEffectiveFirewallsResponseEffectiveFirewallPolicyTypeEnum {
    Hierarchy = "HIERARCHY",
    Network = "NETWORK",
    Unspecified = "UNSPECIFIED"
}
export declare class NetworksGetEffectiveFirewallsResponseEffectiveFirewallPolicy extends SpeakeasyBase {
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
     * [Output Only] The type of the firewall policy.
     */
    type?: NetworksGetEffectiveFirewallsResponseEffectiveFirewallPolicyTypeEnum;
}
