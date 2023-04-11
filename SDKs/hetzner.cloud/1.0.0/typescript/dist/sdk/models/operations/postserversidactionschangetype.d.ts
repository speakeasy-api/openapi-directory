import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsChangeTypeRequestBody extends SpeakeasyBase {
    /**
     * ID or name of Server type the Server should migrate to
     */
    serverType: string;
    /**
     * If false, do not upgrade the disk (this allows downgrading the Server type later)
     */
    upgradeDisk: boolean;
}
export declare class PostServersIdActionsChangeTypeRequest extends SpeakeasyBase {
    requestBody?: PostServersIdActionsChangeTypeRequestBody;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsChangeTypeActionResponseActionError;
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
    resources: PostServersIdActionsChangeTypeActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsChangeTypeActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeTypeActionResponseAction;
}
export declare class PostServersIdActionsChangeTypeResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsChangeTypeActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
