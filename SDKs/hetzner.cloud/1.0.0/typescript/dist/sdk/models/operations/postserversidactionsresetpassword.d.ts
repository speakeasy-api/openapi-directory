import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsResetPasswordRequest extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsResetPassword201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsResetPassword201ApplicationJSONActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsResetPassword201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsResetPassword201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsResetPassword201ApplicationJSONActionError;
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
    resources: PostServersIdActionsResetPassword201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsResetPassword201ApplicationJSONActionStatusEnum;
}
/**
 * The `root_password` key in the reply contains the new root password that will be active if the Action succeeds.
 *
 * @remarks
 *
 * The `action` key in the reply contains an Action object with this structure:
 *
 */
export declare class PostServersIdActionsResetPassword201ApplicationJSON extends SpeakeasyBase {
    action?: PostServersIdActionsResetPassword201ApplicationJSONAction;
    /**
     * Password that will be set for this Server once the Action succeeds
     */
    rootPassword?: string;
}
export declare class PostServersIdActionsResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `root_password` key in the reply contains the new root password that will be active if the Action succeeds.
     *
     * @remarks
     *
     * The `action` key in the reply contains an Action object with this structure:
     *
     */
    postServersIdActionsResetPassword201ApplicationJSONObject?: PostServersIdActionsResetPassword201ApplicationJSON;
}
