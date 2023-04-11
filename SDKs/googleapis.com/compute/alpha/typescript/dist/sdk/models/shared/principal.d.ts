import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Deprecated] All fields defined in a principal are ANDed.
 */
export declare class Principal extends SpeakeasyBase {
    /**
     * An expression to specify custom condition.
     */
    condition?: string;
    /**
     * The groups the principal belongs to. Exact match, prefix match, and suffix match are supported.
     */
    groups?: string[];
    /**
     * IPv4 or IPv6 address or range (In CIDR format)
     */
    ips?: string[];
    /**
     * The namespaces. Exact match, prefix match, and suffix match are supported.
     */
    namespaces?: string[];
    /**
     * Negate of groups. Specifies exclusions.
     */
    notGroups?: string[];
    /**
     * Negate of IPs. Specifies exclusions.
     */
    notIps?: string[];
    /**
     * Negate of namespaces. Specifies exclusions.
     */
    notNamespaces?: string[];
    /**
     * Negate of users. Specifies exclusions.
     */
    notUsers?: string[];
    /**
     * A map of Istio attribute to expected values. Exact match, prefix match, and suffix match are supported for values. For example, `request.headers[version]: "v1"`. The properties are ANDed together.
     */
    properties?: Record<string, string>;
    /**
     * The user names/IDs or service accounts. Exact match, prefix match, and suffix match are supported.
     */
    users?: string[];
}
