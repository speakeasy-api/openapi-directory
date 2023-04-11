import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWorkspaceServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkspaceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWorkspaceRequest extends SpeakeasyBase {
    /**
     * The SID of the Workspace resource to fetch.
     */
    sid: string;
}
export declare class FetchWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
