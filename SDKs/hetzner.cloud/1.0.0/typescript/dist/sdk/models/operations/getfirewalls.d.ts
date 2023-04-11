import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetFirewallsSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare class GetFirewallsRequest extends SpeakeasyBase {
    /**
     * Can be used to filter resources by labels. The response will only contain resources matching the label selector.
     */
    labelSelector?: string;
    /**
     * Can be used to filter resources by their name. The response will only contain the resources matching the specified name
     */
    name?: string;
    /**
     * Can be used multiple times.
     */
    sort?: GetFirewallsSortEnum;
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer;
    /**
     * Type of resource referenced
     */
    type?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector;
    server?: GetFirewallsFirewallsResponseFirewallAppliedToServer;
    /**
     * Type of resource referenced
     */
    type: GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum;
}
/**
 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
 */
export declare enum GetFirewallsFirewallsResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Type of traffic to allow
 */
export declare enum GetFirewallsFirewallsResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class GetFirewallsFirewallsResponseFirewallRule extends SpeakeasyBase {
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
    direction: GetFirewallsFirewallsResponseFirewallRuleDirectionEnum;
    /**
     * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
     */
    port?: string;
    /**
     * Type of traffic to allow
     */
    protocol: GetFirewallsFirewallsResponseFirewallRuleProtocolEnum;
    /**
     * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.
     */
    sourceIps?: string[];
}
export declare class GetFirewallsFirewallsResponseFirewall extends SpeakeasyBase {
    appliedTo: GetFirewallsFirewallsResponseFirewallAppliedTo[];
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
    rules: GetFirewallsFirewallsResponseFirewallRule[];
}
export declare class GetFirewallsFirewallsResponseMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class GetFirewallsFirewallsResponseMeta extends SpeakeasyBase {
    pagination: GetFirewallsFirewallsResponseMetaPagination;
}
/**
 * The `firewalls` key contains an array of Firewall objects
 */
export declare class GetFirewallsFirewallsResponse extends SpeakeasyBase {
    firewalls: GetFirewallsFirewallsResponseFirewall[];
    meta?: GetFirewallsFirewallsResponseMeta;
}
export declare class GetFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `firewalls` key contains an array of Firewall objects
     */
    firewallsResponse?: GetFirewallsFirewallsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
