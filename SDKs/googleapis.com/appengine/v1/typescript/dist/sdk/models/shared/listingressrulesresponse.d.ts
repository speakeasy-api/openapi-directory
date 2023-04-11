import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";
/**
 * Response message for Firewall.ListIngressRules.
 */
export declare class ListIngressRulesResponse extends SpeakeasyBase {
    /**
     * The ingress FirewallRules for this application.
     */
    ingressRules?: FirewallRule[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
