import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostVolumesIdActionsAttachAttachVolumeRequest extends SpeakeasyBase {
    /**
     * Auto-mount the Volume after attaching it
     */
    automount?: boolean;
    /**
     * ID of the Server the Volume will be attached to
     */
    server: number;
}
export declare class PostVolumesIdActionsAttachRequest extends SpeakeasyBase {
    requestBody?: PostVolumesIdActionsAttachAttachVolumeRequest;
    /**
     * ID of the Volume
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostVolumesIdActionsAttachActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostVolumesIdActionsAttachActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostVolumesIdActionsAttachActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsAttachActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostVolumesIdActionsAttachActionResponseActionError;
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
    resources: PostVolumesIdActionsAttachActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostVolumesIdActionsAttachActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `attach_volume` Action
 */
export declare class PostVolumesIdActionsAttachActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsAttachActionResponseAction;
}
export declare class PostVolumesIdActionsAttachResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `attach_volume` Action
     */
    actionResponse?: PostVolumesIdActionsAttachActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
