import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Compute Engine forwarding rule.
 */
export declare class ForwardingRuleInfo extends SpeakeasyBase {
    /**
     * Name of a Compute Engine forwarding rule.
     */
    displayName?: string;
    /**
     * Port range defined in the forwarding rule that matches the test.
     */
    matchedPortRange?: string;
    /**
     * Protocol defined in the forwarding rule that matches the test.
     */
    matchedProtocol?: string;
    /**
     * Network URI. Only valid for Internal Load Balancer.
     */
    networkUri?: string;
    /**
     * Target type of the forwarding rule.
     */
    target?: string;
    /**
     * URI of a Compute Engine forwarding rule.
     */
    uri?: string;
    /**
     * VIP of the forwarding rule.
     */
    vip?: string;
}
