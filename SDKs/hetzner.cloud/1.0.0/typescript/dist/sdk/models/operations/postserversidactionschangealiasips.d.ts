import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsChangeAliasIpsRequestBody extends SpeakeasyBase {
    /**
     * New alias IPs to set for this Server
     */
    aliasIps: string[];
    /**
     * ID of an existing Network already attached to the Server
     */
    network: number;
}
export declare class PostServersIdActionsChangeAliasIpsRequest extends SpeakeasyBase {
    requestBody?: PostServersIdActionsChangeAliasIpsRequestBody;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsChangeAliasIpsActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsChangeAliasIpsActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeAliasIpsActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsChangeAliasIpsActionResponseActionError;
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
    resources: PostServersIdActionsChangeAliasIpsActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsChangeAliasIpsActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeAliasIpsActionResponseAction;
}
export declare class PostServersIdActionsChangeAliasIpsResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsChangeAliasIpsActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
