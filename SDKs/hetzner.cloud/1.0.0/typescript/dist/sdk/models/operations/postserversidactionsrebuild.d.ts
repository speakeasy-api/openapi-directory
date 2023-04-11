import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.
 */
export declare class PostServersIdActionsRebuildRebuildServerRequest extends SpeakeasyBase {
    /**
     * ID or name of Image to rebuilt from.
     */
    image: string;
}
export declare class PostServersIdActionsRebuildRequest extends SpeakeasyBase {
    /**
     * To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.
     */
    requestBody?: PostServersIdActionsRebuildRebuildServerRequest;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsRebuild201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsRebuild201ApplicationJSONActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsRebuild201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsRebuild201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsRebuild201ApplicationJSONActionError;
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
    resources: PostServersIdActionsRebuild201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsRebuild201ApplicationJSONActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsRebuild201ApplicationJSON extends SpeakeasyBase {
    action?: PostServersIdActionsRebuild201ApplicationJSONAction;
    /**
     * New root password when not using SSH keys
     */
    rootPassword?: string;
}
export declare class PostServersIdActionsRebuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    postServersIdActionsRebuild201ApplicationJSONObject?: PostServersIdActionsRebuild201ApplicationJSON;
}
