import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest extends SpeakeasyBase {
    /**
     * ID of Placement Group the Server should be added to
     */
    placementGroup: number;
}
export declare class PostServersIdActionsAddToPlacementGroupRequest extends SpeakeasyBase {
    requestBody?: PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest;
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostServersIdActionsAddToPlacementGroupActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostServersIdActionsAddToPlacementGroupActionResponseActionResources extends SpeakeasyBase {
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
export declare enum PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsAddToPlacementGroupActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostServersIdActionsAddToPlacementGroupActionResponseActionError;
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
    resources: PostServersIdActionsAddToPlacementGroupActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum;
}
/**
 * The `action` key in the reply contains an Action object with this structure
 */
export declare class PostServersIdActionsAddToPlacementGroupActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsAddToPlacementGroupActionResponseAction;
}
export declare class PostServersIdActionsAddToPlacementGroupResponse extends SpeakeasyBase {
    /**
     * The `action` key in the reply contains an Action object with this structure
     */
    actionResponse?: PostServersIdActionsAddToPlacementGroupActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
