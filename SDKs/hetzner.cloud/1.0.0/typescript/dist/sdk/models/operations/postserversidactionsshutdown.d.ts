import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsShutdownRequest extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsShutdownActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsShutdownActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsShutdownActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsShutdownActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsShutdownActionResponseActionError;
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
    resources: PostServersIdActionsShutdownActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsShutdownActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsShutdownActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsShutdownActionResponseAction;
}
export declare class PostServersIdActionsShutdownResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsShutdownActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
