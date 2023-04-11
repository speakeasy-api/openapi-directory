import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    /**
     * If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value)
     */
    delete?: boolean;
    /**
     * If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value)
     */
    rebuild?: boolean;
}
export declare class PostServersIdActionsChangeProtectionRequest extends SpeakeasyBase {
    requestBody?: PostServersIdActionsChangeProtectionRequestBody;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsChangeProtectionActionResponseActionError;
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
    resources: PostServersIdActionsChangeProtectionActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsChangeProtectionActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeProtectionActionResponseAction;
}
export declare class PostServersIdActionsChangeProtectionResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
