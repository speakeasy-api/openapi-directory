import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Configuration for type LabelSelector, required if type is `label_selector`
 */
export declare class PostFirewallsCreateFirewallRequestApplyToLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Configuration for type Server, required if type is `server`
 */
export declare class PostFirewallsCreateFirewallRequestApplyToServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Type of the resource
 */
export declare enum PostFirewallsCreateFirewallRequestApplyToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsCreateFirewallRequestApplyTo extends SpeakeasyBase {
    /**
     * Configuration for type LabelSelector, required if type is `label_selector`
     */
    labelSelector?: PostFirewallsCreateFirewallRequestApplyToLabelSelector;
    /**
     * Configuration for type Server, required if type is `server`
     */
    server?: PostFirewallsCreateFirewallRequestApplyToServer;
    /**
     * Type of the resource
     */
    type: PostFirewallsCreateFirewallRequestApplyToTypeEnum;
}
/**
 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
 */
export declare enum PostFirewallsCreateFirewallRequestRuleDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Type of traffic to allow
 */
export declare enum PostFirewallsCreateFirewallRequestRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PostFirewallsCreateFirewallRequestRule extends SpeakeasyBase {
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
    direction: PostFirewallsCreateFirewallRequestRuleDirectionEnum;
    /**
     * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
     */
    port?: string;
    /**
     * Type of traffic to allow
     */
    protocol: PostFirewallsCreateFirewallRequestRuleProtocolEnum;
    /**
     * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.
     */
    sourceIps?: string[];
}
export declare class PostFirewallsCreateFirewallRequest extends SpeakeasyBase {
    /**
     * Resources the Firewall should be applied to after creation
     */
    applyTo?: PostFirewallsCreateFirewallRequestApplyTo[];
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * Name of the Firewall
     */
    name: string;
    /**
     * Array of rules
     */
    rules?: PostFirewallsCreateFirewallRequestRule[];
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFirewallsCreateFirewallResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFirewallsCreateFirewallResponseActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostFirewallsCreateFirewallResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsCreateFirewallResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFirewallsCreateFirewallResponseActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostFirewallsCreateFirewallResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFirewallsCreateFirewallResponseActionStatusEnum;
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer;
    /**
     * Type of resource referenced
     */
    type?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
}
/**
 * Type of resource referenced
 */
export declare enum PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsCreateFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector;
    server?: PostFirewallsCreateFirewallResponseFirewallAppliedToServer;
    /**
     * Type of resource referenced
     */
    type: PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum;
}
/**
 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
 */
export declare enum PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Type of traffic to allow
 */
export declare enum PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PostFirewallsCreateFirewallResponseFirewallRule extends SpeakeasyBase {
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
    direction: PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum;
    /**
     * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
     */
    port?: string;
    /**
     * Type of traffic to allow
     */
    protocol: PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum;
    /**
     * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.
     */
    sourceIps?: string[];
}
export declare class PostFirewallsCreateFirewallResponseFirewall extends SpeakeasyBase {
    appliedTo: PostFirewallsCreateFirewallResponseFirewallAppliedTo[];
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
    rules: PostFirewallsCreateFirewallResponseFirewallRule[];
}
/**
 * The `firewall` key contains the Firewall that was just created
 */
export declare class PostFirewallsCreateFirewallResponse extends SpeakeasyBase {
    actions?: PostFirewallsCreateFirewallResponseAction[];
    firewall?: PostFirewallsCreateFirewallResponseFirewall;
}
export declare class PostFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `firewall` key contains the Firewall that was just created
     */
    createFirewallResponse?: PostFirewallsCreateFirewallResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
