import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A TunnelDestGroup.
 */
export declare class TunnelDestGroup extends SpeakeasyBase {
    /**
     * Unordered list. List of CIDRs that this group applies to.
     */
    cidrs?: string[];
    /**
     * Unordered list. List of FQDNs that this group applies to.
     */
    fqdns?: string[];
    /**
     * Required. Immutable. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-).
     */
    name?: string;
}
