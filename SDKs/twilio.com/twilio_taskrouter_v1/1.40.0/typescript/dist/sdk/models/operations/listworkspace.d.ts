import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWorkspaceServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListWorkspaceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWorkspaceRequest extends SpeakeasyBase {
    /**
     * The `friendly_name` of the Workspace resources to read. For example `Customer Support` or `2014 Election Campaign`.
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
}
export declare class ListWorkspaceListWorkspaceResponseMeta extends SpeakeasyBase {
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
export declare class ListWorkspaceListWorkspaceResponse extends SpeakeasyBase {
    meta?: ListWorkspaceListWorkspaceResponseMeta;
    workspaces?: shared.TaskrouterV1Workspace[];
}
export declare class ListWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWorkspaceResponse?: ListWorkspaceListWorkspaceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
