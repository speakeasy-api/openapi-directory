import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of rescue system to boot (default: `linux64`)
 */
export declare enum PostServersIdActionsEnableRescueRequestBodyTypeEnum {
    Linux64 = "linux64",
    Linux32 = "linux32"
}
export declare class PostServersIdActionsEnableRescueRequestBody extends SpeakeasyBase {
    /**
     * Array of SSH key IDs which should be injected into the rescue system.
     */
    sshKeys?: number[];
    /**
     * Type of rescue system to boot (default: `linux64`)
     */
    type?: PostServersIdActionsEnableRescueRequestBodyTypeEnum;
}
export declare class PostServersIdActionsEnableRescueRequest extends SpeakeasyBase {
    requestBody?: PostServersIdActionsEnableRescueRequestBody;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsEnableRescue201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsEnableRescue201ApplicationJSONActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsEnableRescue201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsEnableRescue201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsEnableRescue201ApplicationJSONActionError;
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
    resources: PostServersIdActionsEnableRescue201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsEnableRescue201ApplicationJSONActionStatusEnum;
}
/**
 * The `root_password` key in the reply contains the root password that can be used to access the booted rescue system.
 *
 * @remarks
 *
 * The `action` key in the reply contains an Action object with this structure
 *
 */
export declare class PostServersIdActionsEnableRescue201ApplicationJSON extends SpeakeasyBase {
    action?: PostServersIdActionsEnableRescue201ApplicationJSONAction;
    /**
     * Password that will be set for this Server once the Action succeeds
     */
    rootPassword?: string;
}
export declare class PostServersIdActionsEnableRescueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `root_password` key in the reply contains the root password that can be used to access the booted rescue system.
     *
     * @remarks
     *
     * The `action` key in the reply contains an Action object with this structure
     *
     */
    postServersIdActionsEnableRescue201ApplicationJSONObject?: PostServersIdActionsEnableRescue201ApplicationJSON;
}
