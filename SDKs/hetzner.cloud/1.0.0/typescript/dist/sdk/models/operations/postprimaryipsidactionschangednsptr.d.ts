import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Select the IP address for which to change the DNS entry by passing `ip`. For a Primary IP of type `ipv4` this must exactly match the IP address of the Primary IP. For a Primary IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Primary IP.
 *
 * @remarks
 *
 * The target hostname is set by passing `dns_ptr`.
 *
 */
export declare class PostPrimaryIpsIdActionsChangeDnsPtrChangeDNSPTRRequest extends SpeakeasyBase {
    /**
     * Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`
     */
    dnsPtr: string;
    /**
     * IP address for which to set the reverse DNS entry
     */
    ip: string;
}
export declare class PostPrimaryIpsIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
    /**
     * Select the IP address for which to change the DNS entry by passing `ip`. For a Primary IP of type `ipv4` this must exactly match the IP address of the Primary IP. For a Primary IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Primary IP.
     *
     * @remarks
     *
     * The target hostname is set by passing `dns_ptr`.
     *
     */
    requestBody?: PostPrimaryIpsIdActionsChangeDnsPtrChangeDNSPTRRequest;
    /**
     * ID of the Primary IP
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostPrimaryIpsIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostPrimaryIpsIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostPrimaryIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostPrimaryIpsIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostPrimaryIpsIdActionsChangeDnsPtrActionResponseActionError;
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
    resources: PostPrimaryIpsIdActionsChangeDnsPtrActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostPrimaryIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_dns_ptr` Action
 */
export declare class PostPrimaryIpsIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
    action: PostPrimaryIpsIdActionsChangeDnsPtrActionResponseAction;
}
export declare class PostPrimaryIpsIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_dns_ptr` Action
     */
    actionResponse?: PostPrimaryIpsIdActionsChangeDnsPtrActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
