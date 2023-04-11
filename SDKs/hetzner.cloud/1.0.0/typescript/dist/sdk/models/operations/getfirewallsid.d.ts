import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFirewallsIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;
    /**
     * Type of resource referenced
     */
    type?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class GetFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;
    server?: GetFirewallsIdFirewallResponseFirewallAppliedToServer;
    /**
     * Type of resource referenced
     */
    type: GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}
/**
 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
 */
export declare enum GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Type of traffic to allow
 */
export declare enum GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class GetFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
    /**
     * Description of the Rule
     */
    description?: string;
    /**
     * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.
     */
    destinationIps?: string[];
    /**
     * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
     */
    direction: GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum;
    /**
     * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
     */
    port?: string;
    /**
     * Type of traffic to allow
     */
    protocol: GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum;
    /**
     * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.
     */
    sourceIps?: string[];
}
export declare class GetFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
    appliedTo: GetFirewallsIdFirewallResponseFirewallAppliedTo[];
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, string>;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    rules: GetFirewallsIdFirewallResponseFirewallRule[];
}
/**
 * The `firewall` key contains a Firewall object
 */
export declare class GetFirewallsIdFirewallResponse extends SpeakeasyBase {
    firewall: GetFirewallsIdFirewallResponseFirewall;
}
export declare class GetFirewallsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `firewall` key contains a Firewall object
     */
    firewallResponse?: GetFirewallsIdFirewallResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
