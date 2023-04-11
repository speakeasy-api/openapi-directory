import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Configuration for type label_selector, required if type is `label_selector`
 */
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Configuration for type server, required if type is `server`
 */
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Type of the resource
 */
export declare enum PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources extends SpeakeasyBase {
    /**
     * Configuration for type label_selector, required if type is `label_selector`
     */
    labelSelector?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector;
    /**
     * Configuration for type server, required if type is `server`
     */
    server?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer;
    /**
     * Type of the resource
     */
    type?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum;
}
export declare class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest extends SpeakeasyBase {
    /**
     * Resources the Firewall should be applied to
     */
    applyTo: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources[];
}
export declare class PostFirewallsIdActionsApplyToResourcesRequest extends SpeakeasyBase {
    requestBody?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest;
    /**
     * ID of the Firewall
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources extends SpeakeasyBase {
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
export declare enum PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFirewallsIdActionsApplyToResourcesActionsResponseActionError;
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
    resources: PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum;
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponseMeta extends SpeakeasyBase {
    pagination: PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination;
}
/**
 * The `actions` key contains multiple `apply_firewall` Actions
 */
export declare class PostFirewallsIdActionsApplyToResourcesActionsResponse extends SpeakeasyBase {
    actions: PostFirewallsIdActionsApplyToResourcesActionsResponseAction[];
    meta?: PostFirewallsIdActionsApplyToResourcesActionsResponseMeta;
}
export declare class PostFirewallsIdActionsApplyToResourcesResponse extends SpeakeasyBase {
    /**
     * The `actions` key contains multiple `apply_firewall` Actions
     */
    actionsResponse?: PostFirewallsIdActionsApplyToResourcesActionsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
