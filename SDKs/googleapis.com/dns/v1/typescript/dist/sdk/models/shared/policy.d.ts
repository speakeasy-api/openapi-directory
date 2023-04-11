import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyAlternativeNameServerConfig } from "./policyalternativenameserverconfig";
import { PolicyNetwork } from "./policynetwork";
/**
 * A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
 */
export declare class Policy extends SpeakeasyBase {
    alternativeNameServerConfig?: PolicyAlternativeNameServerConfig;
    /**
     * A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the policy's function.
     */
    description?: string;
    /**
     * Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address is allocated from each of the subnetworks that are bound to this policy.
     */
    enableInboundForwarding?: boolean;
    /**
     * Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
     */
    enableLogging?: boolean;
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string;
    kind?: string;
    /**
     * User-assigned name for this policy.
     */
    name?: string;
    /**
     * List of network names specifying networks to which this policy is applied.
     */
    networks?: PolicyNetwork[];
}
