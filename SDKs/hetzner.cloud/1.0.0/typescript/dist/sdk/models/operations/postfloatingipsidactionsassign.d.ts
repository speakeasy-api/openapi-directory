import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * #### Call specific error codes
 *
 * @remarks
 *
 * | Code                          | Description                                                   |
 * |------------------------------ |-------------------------------------------------------------- |
 * | `floating_ip_assigned`        | The floating IP is already assigned                           |
 *
 */
export declare class PostFloatingIpsIdActionsAssignAssignFloatingIPRequest extends SpeakeasyBase {
    /**
     * ID of the Server the Floating IP shall be assigned to
     */
    server: number;
}
export declare class PostFloatingIpsIdActionsAssignRequest extends SpeakeasyBase {
    requestBody?: PostFloatingIpsIdActionsAssignAssignFloatingIPRequest;
    /**
     * ID of the Floating IP
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFloatingIpsIdActionsAssignActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFloatingIpsIdActionsAssignActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsAssignActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFloatingIpsIdActionsAssignActionResponseActionError;
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
    resources: PostFloatingIpsIdActionsAssignActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `assign` Action
 */
export declare class PostFloatingIpsIdActionsAssignActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsAssignActionResponseAction;
}
export declare class PostFloatingIpsIdActionsAssignResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `assign` Action
     */
    actionResponse?: PostFloatingIpsIdActionsAssignActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
