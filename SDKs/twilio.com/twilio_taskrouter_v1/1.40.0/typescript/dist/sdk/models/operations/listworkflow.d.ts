import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListWorkflowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWorkflowRequest extends SpeakeasyBase {
    /**
     * The `friendly_name` of the Workflow resources to read.
     */
    friendlyName?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the Workspace with the Workflow to read.
     */
    workspaceSid: string;
}
export declare class ListWorkflowListWorkflowResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListWorkflowListWorkflowResponse extends SpeakeasyBase {
    meta?: ListWorkflowListWorkflowResponseMeta;
    workflows?: shared.TaskrouterV1WorkspaceWorkflow[];
}
export declare class ListWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWorkflowResponse?: ListWorkflowListWorkflowResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
