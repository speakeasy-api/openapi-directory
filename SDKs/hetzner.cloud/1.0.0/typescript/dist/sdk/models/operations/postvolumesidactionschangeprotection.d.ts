import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostVolumesIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    /**
     * If true, prevents the Volume from being deleted
     */
    delete?: boolean;
}
export declare class PostVolumesIdActionsChangeProtectionRequest extends SpeakeasyBase {
    requestBody?: PostVolumesIdActionsChangeProtectionRequestBody;
    /**
     * ID of the Volume
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostVolumesIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostVolumesIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostVolumesIdActionsChangeProtectionActionResponseActionError;
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
    resources: PostVolumesIdActionsChangeProtectionActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_protection` Action
 */
export declare class PostVolumesIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsChangeProtectionActionResponseAction;
}
export declare class PostVolumesIdActionsChangeProtectionResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_protection` Action
     */
    actionResponse?: PostVolumesIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
