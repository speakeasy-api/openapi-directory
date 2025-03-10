import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsDisableRescueRequest extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsDisableRescueActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsDisableRescueActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsDisableRescueActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsDisableRescueActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsDisableRescueActionResponseActionError;
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
    resources: PostServersIdActionsDisableRescueActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsDisableRescueActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsDisableRescueActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsDisableRescueActionResponseAction;
}
export declare class PostServersIdActionsDisableRescueResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsDisableRescueActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
