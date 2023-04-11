import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsRequestConsoleRequest extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsRequestConsole201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsRequestConsole201ApplicationJSONActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsRequestConsole201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsRequestConsole201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsRequestConsole201ApplicationJSONActionError;
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
    resources: PostServersIdActionsRequestConsole201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsRequestConsole201ApplicationJSONActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsRequestConsole201ApplicationJSON extends SpeakeasyBase {
    action: PostServersIdActionsRequestConsole201ApplicationJSONAction;
    /**
     * VNC password to use for this connection (this password only works in combination with a wss_url with valid token)
     */
    password: string;
    /**
     * URL of websocket proxy to use; this includes a token which is valid for a limited time only
     */
    wssUrl: string;
}
export declare class PostServersIdActionsRequestConsoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    postServersIdActionsRequestConsole201ApplicationJSONObject?: PostServersIdActionsRequestConsole201ApplicationJSON;
}
