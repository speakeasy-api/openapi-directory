import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostVolumesIdActionsResizeRequestBody extends SpeakeasyBase {
    /**
     * New Volume size in GB (must be greater than current size)
     */
    size: number;
}
export declare class PostVolumesIdActionsResizeRequest extends SpeakeasyBase {
    requestBody?: PostVolumesIdActionsResizeRequestBody;
    /**
     * ID of the Volume
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostVolumesIdActionsResizeActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostVolumesIdActionsResizeActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostVolumesIdActionsResizeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsResizeActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostVolumesIdActionsResizeActionResponseActionError;
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
    resources: PostVolumesIdActionsResizeActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostVolumesIdActionsResizeActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `resize_volume` Action
 */
export declare class PostVolumesIdActionsResizeActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsResizeActionResponseAction;
}
export declare class PostVolumesIdActionsResizeResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `resize_volume` Action
     */
    actionResponse?: PostVolumesIdActionsResizeActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
