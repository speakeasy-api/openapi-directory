import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.
 */
export declare enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum {
    In = "in",
    Out = "out"
}
/**
 * Type of traffic to allow
 */
export declare enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class PostFirewallsIdActionsSetRulesSetRulesRequestRule extends SpeakeasyBase {
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
    direction: PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum;
    /**
     * Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g `1024-5000`.
     */
    port?: string;
    /**
     * Type of traffic to allow
     */
    protocol: PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum;
    /**
     * List of permitted IPv4/IPv6 addresses in CIDR notation. Use `0.0.0.0/0` to allow all IPv4 addresses and `::/0` to allow all IPv6 addresses. You can specify 100 CIDRs at most.
     */
    sourceIps?: string[];
}
export declare class PostFirewallsIdActionsSetRulesSetRulesRequest extends SpeakeasyBase {
    /**
     * Array of rules
     */
    rules: PostFirewallsIdActionsSetRulesSetRulesRequestRule[];
}
export declare class PostFirewallsIdActionsSetRulesRequest extends SpeakeasyBase {
    requestBody?: PostFirewallsIdActionsSetRulesSetRulesRequest;
    /**
     * ID of the Firewall
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFirewallsIdActionsSetRulesActionsResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFirewallsIdActionsSetRulesActionsResponseActionResources extends SpeakeasyBase {
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
export declare enum PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsIdActionsSetRulesActionsResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFirewallsIdActionsSetRulesActionsResponseActionError;
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
    resources: PostFirewallsIdActionsSetRulesActionsResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum;
}
export declare class PostFirewallsIdActionsSetRulesActionsResponseMetaPagination extends SpeakeasyBase {
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
export declare class PostFirewallsIdActionsSetRulesActionsResponseMeta extends SpeakeasyBase {
    pagination: PostFirewallsIdActionsSetRulesActionsResponseMetaPagination;
}
/**
 * The `action` key contains one `set_firewall_rules` Action plus one `apply_firewall` Action per resource where the Firewall is active
 */
export declare class PostFirewallsIdActionsSetRulesActionsResponse extends SpeakeasyBase {
    actions: PostFirewallsIdActionsSetRulesActionsResponseAction[];
    meta?: PostFirewallsIdActionsSetRulesActionsResponseMeta;
}
export declare class PostFirewallsIdActionsSetRulesResponse extends SpeakeasyBase {
    /**
     * The `action` key contains one `set_firewall_rules` Action plus one `apply_firewall` Action per resource where the Firewall is active
     */
    actionsResponse?: PostFirewallsIdActionsSetRulesActionsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
