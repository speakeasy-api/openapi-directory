import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsAttachToNetworkAttachToNetworkRequest extends SpeakeasyBase {
    /**
     * Additional IPs to be assigned to this Server
     */
    aliasIps?: string[];
    /**
     * IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address
     */
    ip?: string;
    /**
     * ID of an existing network to attach the Server to
     */
    network: number;
}
export declare class PostServersIdActionsAttachToNetworkRequest extends SpeakeasyBase {
    requestBody?: PostServersIdActionsAttachToNetworkAttachToNetworkRequest;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsAttachToNetworkActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsAttachToNetworkActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsAttachToNetworkActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsAttachToNetworkActionResponseActionError;
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
    resources: PostServersIdActionsAttachToNetworkActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsAttachToNetworkActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsAttachToNetworkActionResponseAction;
}
export declare class PostServersIdActionsAttachToNetworkResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsAttachToNetworkActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
