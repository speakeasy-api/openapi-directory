import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVolumesIdActionsActionIdRequest extends SpeakeasyBase {
    /**
     * ID of the Action
     */
    actionId: number;
    /**
     * ID of the Volume
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetVolumesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetVolumesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
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
export declare enum GetVolumesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetVolumesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetVolumesIdActionsActionIdActionResponseActionError;
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
    resources: GetVolumesIdActionsActionIdActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetVolumesIdActionsActionIdActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the Volume Action
 */
export declare class GetVolumesIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetVolumesIdActionsActionIdActionResponseAction;
}
export declare class GetVolumesIdActionsActionIdResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the Volume Action
     */
    actionResponse?: GetVolumesIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
