import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of resource assigning the Primary IP to
 */
export declare enum PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequestAssigneeTypeEnum {
    Server = "server"
}
export declare class PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequest extends SpeakeasyBase {
    /**
     * ID of a resource of type `assignee_type`
     */
    assigneeId: number;
    /**
     * Type of resource assigning the Primary IP to
     */
    assigneeType: PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequestAssigneeTypeEnum;
}
export declare class PostPrimaryIpsIdActionsAssignRequest extends SpeakeasyBase {
    requestBody?: PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequest;
    /**
     * ID of the Primary IP
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostPrimaryIpsIdActionsAssignActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostPrimaryIpsIdActionsAssignActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostPrimaryIpsIdActionsAssignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostPrimaryIpsIdActionsAssignActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostPrimaryIpsIdActionsAssignActionResponseActionError;
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
    resources: PostPrimaryIpsIdActionsAssignActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostPrimaryIpsIdActionsAssignActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostPrimaryIpsIdActionsAssignActionResponse extends SpeakeasyBase {
    action: PostPrimaryIpsIdActionsAssignActionResponseAction;
}
export declare class PostPrimaryIpsIdActionsAssignResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostPrimaryIpsIdActionsAssignActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
