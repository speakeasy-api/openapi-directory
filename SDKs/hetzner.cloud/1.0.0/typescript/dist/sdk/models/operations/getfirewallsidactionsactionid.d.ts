import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFirewallsIdActionsActionIdRequest extends SpeakeasyBase {
    /**
     * ID of the Action
     */
    actionId: number;
    /**
     * ID of the Firewall
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class GetFirewallsIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class GetFirewallsIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
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
export declare enum GetFirewallsIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetFirewallsIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: GetFirewallsIdActionsActionIdActionResponseActionError;
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
    resources: GetFirewallsIdActionsActionIdActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: GetFirewallsIdActionsActionIdActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the Firewall Action
 */
export declare class GetFirewallsIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetFirewallsIdActionsActionIdActionResponseAction;
}
export declare class GetFirewallsIdActionsActionIdResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the Firewall Action
     */
    actionResponse?: GetFirewallsIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
