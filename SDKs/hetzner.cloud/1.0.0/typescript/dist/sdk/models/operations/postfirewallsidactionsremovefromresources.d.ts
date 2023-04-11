import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Configuration for type label_selector, required if type is `label_selector`
 */
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Configuration for type server, required if type is `server`
 */
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
/**
 * Type of the resource
 */
export declare enum PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources extends SpeakeasyBase {
    /**
     * Configuration for type label_selector, required if type is `label_selector`
     */
    labelSelector?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector;
    /**
     * Configuration for type server, required if type is `server`
     */
    server?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer;
    /**
     * Type of the resource
     */
    type?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest extends SpeakeasyBase {
    /**
     * Resources the Firewall should be removed from
     */
    removeFrom: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources[];
}
export declare class PostFirewallsIdActionsRemoveFromResourcesRequest extends SpeakeasyBase {
    requestBody?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest;
    /**
     * ID of the Firewall
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources extends SpeakeasyBase {
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
export declare enum PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError;
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
    resources: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination extends SpeakeasyBase {
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
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta extends SpeakeasyBase {
    pagination: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination;
}
/**
 * The `actions` key contains multiple `remove_firewall` Actions
 */
export declare class PostFirewallsIdActionsRemoveFromResourcesActionsResponse extends SpeakeasyBase {
    actions: PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction[];
    meta?: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta;
}
export declare class PostFirewallsIdActionsRemoveFromResourcesResponse extends SpeakeasyBase {
    /**
     * The `actions` key contains multiple `remove_firewall` Actions
     */
    actionsResponse?: PostFirewallsIdActionsRemoveFromResourcesActionsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
