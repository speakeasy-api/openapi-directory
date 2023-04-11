import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";
/**
 * Response message for Firewall.UpdateAllIngressRules.
 */
export declare class BatchUpdateIngressRulesResponse extends SpeakeasyBase {
    /**
     * The full list of ingress FirewallRules for this application.
     */
    ingressRules?: FirewallRule[];
}
