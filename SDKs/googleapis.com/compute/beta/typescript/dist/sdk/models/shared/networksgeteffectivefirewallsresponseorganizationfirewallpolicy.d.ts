import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyRule } from "./securitypolicyrule";
/**
 * A pruned SecurityPolicy containing ID and any applicable firewall rules.
 */
export declare class NetworksGetEffectiveFirewallsResponseOrganizationFirewallPolicy extends SpeakeasyBase {
    /**
     * [Output Only] The unique identifier for the security policy. This identifier is defined by the server.
     */
    id?: string;
    /**
     * The rules that apply to the network.
     */
    rules?: SecurityPolicyRule[];
}
