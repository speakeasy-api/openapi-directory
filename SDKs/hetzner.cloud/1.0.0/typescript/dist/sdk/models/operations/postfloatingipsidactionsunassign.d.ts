import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostFloatingIpsIdActionsUnassignRequest extends SpeakeasyBase {
    /**
     * ID of the Floating IP
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFloatingIpsIdActionsUnassignActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFloatingIpsIdActionsUnassignActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsUnassignActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFloatingIpsIdActionsUnassignActionResponseActionError;
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
    resources: PostFloatingIpsIdActionsUnassignActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `unassign` Action
 */
export declare class PostFloatingIpsIdActionsUnassignActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsUnassignActionResponseAction;
}
export declare class PostFloatingIpsIdActionsUnassignResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `unassign` Action
     */
    actionResponse?: PostFloatingIpsIdActionsUnassignActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
