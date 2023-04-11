import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutFirewallsIdUpdateFirewallRequest extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * New Firewall name
     */
    name?: string;
}
export declare class PutFirewallsIdRequest extends SpeakeasyBase {
    requestBody?: PutFirewallsIdUpdateFirewallRequest;
    /**
     * ID of the resource
     */
    id: number;
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;
    /**
     * Type of resource referenced
     */
    type?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PutFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;
    server?: PutFirewallsIdFirewallResponseFirewallAppliedToServer;
    /**
     * Type of resource referenced
     */
    type: PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}
/**
 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
 */
export declare enum PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Type of traffic to allow
 */
export declare enum PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PutFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
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
    direction: PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum;
    /**
     * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
     */
    port?: string;
    /**
     * Type of traffic to allow
     */
    protocol: PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum;
    /**
     * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.
     */
    sourceIps?: string[];
}
export declare class PutFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
    appliedTo: PutFirewallsIdFirewallResponseFirewallAppliedTo[];
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
    rules: PutFirewallsIdFirewallResponseFirewallRule[];
}
/**
 * The `firewall` key contains the Firewall that was just updated
 */
export declare class PutFirewallsIdFirewallResponse extends SpeakeasyBase {
    firewall: PutFirewallsIdFirewallResponseFirewall;
}
export declare class PutFirewallsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `firewall` key contains the Firewall that was just updated
     */
    firewallResponse?: PutFirewallsIdFirewallResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
