import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostVolumesIdActionsDetachRequest extends SpeakeasyBase {
    /**
     * ID of the Volume
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostVolumesIdActionsDetachActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostVolumesIdActionsDetachActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostVolumesIdActionsDetachActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsDetachActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostVolumesIdActionsDetachActionResponseActionError;
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
    resources: PostVolumesIdActionsDetachActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostVolumesIdActionsDetachActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `detach_volume` Action
 */
export declare class PostVolumesIdActionsDetachActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsDetachActionResponseAction;
}
export declare class PostVolumesIdActionsDetachResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `detach_volume` Action
     */
    actionResponse?: PostVolumesIdActionsDetachActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
