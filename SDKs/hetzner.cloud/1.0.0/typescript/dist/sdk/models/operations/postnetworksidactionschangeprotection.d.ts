import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostNetworksIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
    /**
     * If true, prevents the Network from being deleted
     */
    delete?: boolean;
}
export declare class PostNetworksIdActionsChangeProtectionRequest extends SpeakeasyBase {
    requestBody?: PostNetworksIdActionsChangeProtectionChangeProtectionRequest;
    /**
     * ID of the Network
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostNetworksIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostNetworksIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostNetworksIdActionsChangeProtectionActionResponseActionError;
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
    resources: PostNetworksIdActionsChangeProtectionActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_protection` Action
 */
export declare class PostNetworksIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsChangeProtectionActionResponseAction;
}
export declare class PostNetworksIdActionsChangeProtectionResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_protection` Action
     */
    actionResponse?: PostNetworksIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
