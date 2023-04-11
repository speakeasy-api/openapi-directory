import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Select the IP address for which to change the DNS entry by passing `ip`. For a Floating IP of type `ipv4` this must exactly match the IP address of the Floating IP. For a Floating IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Floating IP.
 *
 * @remarks
 *
 * The target hostname is set by passing `dns_ptr`.
 *
 */
export declare class PostFloatingIpsIdActionsChangeDnsPtrChangeDNSPTRRequest extends SpeakeasyBase {
    /**
     * Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`
     */
    dnsPtr: string;
    /**
     * IP address for which to set the reverse DNS entry
     */
    ip: string;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
    /**
     * Select the IP address for which to change the DNS entry by passing `ip`. For a Floating IP of type `ipv4` this must exactly match the IP address of the Floating IP. For a Floating IP of type `ipv6` this must be a single IP within the IPv6 /64 range that belongs to this Floating IP.
     *
     * @remarks
     *
     * The target hostname is set by passing `dns_ptr`.
     *
     */
    requestBody?: PostFloatingIpsIdActionsChangeDnsPtrChangeDNSPTRRequest;
    /**
     * ID of the Floating IP
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError;
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
    resources: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_dns_ptr` Action
 */
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_dns_ptr` Action
     */
    actionResponse?: PostFloatingIpsIdActionsChangeDnsPtrActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
