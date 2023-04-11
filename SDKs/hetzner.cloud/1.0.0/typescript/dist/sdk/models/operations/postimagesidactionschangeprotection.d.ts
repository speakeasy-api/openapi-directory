import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostImagesIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    /**
     * If true, prevents the snapshot from being deleted
     */
    delete?: boolean;
}
export declare class PostImagesIdActionsChangeProtectionRequest extends SpeakeasyBase {
    requestBody?: PostImagesIdActionsChangeProtectionRequestBody;
    /**
     * ID of the Image
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostImagesIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostImagesIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostImagesIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostImagesIdActionsChangeProtectionActionResponseActionError;
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
    resources: PostImagesIdActionsChangeProtectionActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_protection` Action
 */
export declare class PostImagesIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostImagesIdActionsChangeProtectionActionResponseAction;
}
export declare class PostImagesIdActionsChangeProtectionResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_protection` Action
     */
    actionResponse?: PostImagesIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
