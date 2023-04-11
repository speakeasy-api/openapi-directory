import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
 */
export declare class PostServersIdActionsChangeDnsPtrRequestBody extends SpeakeasyBase {
    /**
     * Hostname to set as a reverse DNS PTR entry, reset to original value if `null`
     */
    dnsPtr: string;
    /**
     * Primary IP address for which the reverse DNS entry should be set
     */
    ip: string;
}
export declare class PostServersIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
    /**
     * Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`.
     */
    requestBody?: PostServersIdActionsChangeDnsPtrRequestBody;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsChangeDnsPtrActionResponseActionError;
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
    resources: PostServersIdActionsChangeDnsPtrActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeDnsPtrActionResponseAction;
}
export declare class PostServersIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsChangeDnsPtrActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
