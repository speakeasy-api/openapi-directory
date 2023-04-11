import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
    /**
     * If true, prevents the Floating IP from being deleted
     */
    delete?: boolean;
}
export declare class PostFloatingIpsIdActionsChangeProtectionRequest extends SpeakeasyBase {
    requestBody?: PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest;
    /**
     * ID of the Floating IP
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFloatingIpsIdActionsChangeProtectionActionResponseActionError;
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
    resources: PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `change_protection` Action
 */
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsChangeProtectionActionResponseAction;
}
export declare class PostFloatingIpsIdActionsChangeProtectionResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `change_protection` Action
     */
    actionResponse?: PostFloatingIpsIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
