import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPrimaryIpsIdActionsUnassignRequest extends SpeakeasyBase {
    /**
     * ID of the Primary IP
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostPrimaryIpsIdActionsUnassignActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostPrimaryIpsIdActionsUnassignActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostPrimaryIpsIdActionsUnassignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostPrimaryIpsIdActionsUnassignActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostPrimaryIpsIdActionsUnassignActionResponseActionError;
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
    resources: PostPrimaryIpsIdActionsUnassignActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostPrimaryIpsIdActionsUnassignActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostPrimaryIpsIdActionsUnassignActionResponse extends SpeakeasyBase {
    action: PostPrimaryIpsIdActionsUnassignActionResponseAction;
}
export declare class PostPrimaryIpsIdActionsUnassignResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostPrimaryIpsIdActionsUnassignActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
